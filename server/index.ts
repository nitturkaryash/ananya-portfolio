import "dotenv/config";
import express from "express";
import cors from "cors";
import { createServer as createViteServer } from "vite";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  return app;
}

// Start the appropriate server based on environment
async function startServer() {
  const port = process.env.PORT ? parseInt(process.env.PORT) : 8080;

  if (process.env.NODE_ENV === "production") {
    // Production server
    const app = createServer();
    app.use(express.static("dist/spa"));
    
    app.get("*", (_req, res) => {
      res.sendFile("index.html", { root: "dist/spa" });
    });
    
    app.listen(port, () => {
      console.log(`🚀 Production server running on http://localhost:${port}`);
    });
  } else {
    // Development server with Vite integration
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });

    const app = createServer();
    
    // CRITICAL: Add Vite middleware but skip it for API routes
    app.use((req, res, next) => {
      if (req.url?.startsWith('/api/')) {
        // Skip Vite middleware for API routes
        next();
      } else {
        // Use Vite middleware for frontend assets
        vite.middlewares(req, res, next);
      }
    });

    app.listen(port, () => {
      console.log(`🚀 Development server running on http://localhost:${port}`);
      console.log(`📡 API available at http://localhost:${port}/api/`);
    });
  }
}

startServer().catch(console.error);