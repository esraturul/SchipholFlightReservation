"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Create a custom axios instance
const api = axios_1.default.create({
    baseURL: process.env.API_BASE_URL,
});
// Add a request interceptor
api.interceptors.request.use((config) => {
    config.headers["app_id"] = process.env.API_ID;
    config.headers["app_key"] = process.env.API_KEY;
    config.headers["ResourceVersion"] = process.env.API_VERSION;
    config.headers["Accept"] = "application/json";
    return config;
});
exports.default = api;
