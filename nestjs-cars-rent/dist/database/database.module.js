"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let DatabaseModule = class DatabaseModule {
    constructor(connection) {
        if (connection.isConnected)
            console.log('DB Connected Successfully!');
    }
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_2.TypeOrmModule.forRoot({
                "type": "mysql",
                "host": "localhost",
                "port": 3306,
                "username": "root",
                "password": "63010616",
                "database": "royalrent",
                "entities": ["dist/**/entities/*{.ts,.js}"],
                "synchronize": true,
                "migrations": ["dist/migrations/*{.ts,.js}"],
                "cli": {
                    "migrationsDir": "src/migrations"
                }
            })],
        exports: [typeorm_2.TypeOrmModule],
    }),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map