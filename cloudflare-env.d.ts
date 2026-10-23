declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    BUCKET?: R2Bucket;
    FOODICS_CLIENT_ID?: string;
    FOODICS_CLIENT_SECRET?: string;
    FOODICS_REDIRECT_URI?: string;
    FOODICS_ENVIRONMENT?: string;
    FOODICS_TOKEN_ENCRYPTION_KEY?: string;
    FOODICS_SCHEDULER_SECRET?: string;
  }
}
