module.exports = {
    networks: {
        development: {
            host: "127.0.0.1", // Localhost (default: none)
            port: 9000, // Standard Ethereum port (default: none)
            network_id: "1234", // Any network (default: none)
        },
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: "0.8.17",
        },
    },
};
