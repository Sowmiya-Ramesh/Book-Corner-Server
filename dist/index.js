"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * File: index.ts
 * Project: <<Book Corner>>
 * File Created: Monday, 24th July 2023 10:12:49 am
 * Author: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Last Modified: Monday, 24th July 2023 10:13:02 am
 * Modified By: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Copyright 2023 - 2023 Your Company, Your Company
 */
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// Example route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
