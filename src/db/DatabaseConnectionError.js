class DatabaseConnectionError extends Error {
    constructor(message) {
        super(message);
        this.name = "DatabaseConnectionError";
    }
}
