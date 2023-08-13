/*
  Warnings:

  - You are about to drop the column `Criancas` on the `Afetados` table. All the data in the column will be lost.
  - You are about to drop the column `idRelatorio` on the `Afetados` table. All the data in the column will be lost.
  - You are about to drop the column `esquinos` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `idRelatorio` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `nomeCargo` on the `Cargo` table. All the data in the column will be lost.
  - You are about to drop the column `idEndereco` on the `Civil` table. All the data in the column will be lost.
  - You are about to drop the column `idRelatorio` on the `DadosDaVistoria` table. All the data in the column will be lost.
  - The primary key for the `Endereco` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Endereco` table. All the data in the column will be lost.
  - You are about to drop the column `lat` on the `Fluviometro` table. All the data in the column will be lost.
  - You are about to alter the column `longitude` on the `Fluviometro` table. The data in that column could be lost. The data in that column will be cast from `Decimal(6,2)` to `Decimal(8,3)`.
  - You are about to drop the column `idEndereco` on the `Foto` table. All the data in the column will be lost.
  - You are about to drop the column `idRelatorio` on the `Foto` table. All the data in the column will be lost.
  - You are about to drop the column `tipoUsuario` on the `Funcionario` table. All the data in the column will be lost.
  - You are about to drop the column `idFuncionario` on the `Gestor` table. All the data in the column will be lost.
  - You are about to drop the column `dataMemo` on the `Memo` table. All the data in the column will be lost.
  - You are about to drop the column `idCargo` on the `Memo` table. All the data in the column will be lost.
  - You are about to drop the column `idRelatorio` on the `Memo` table. All the data in the column will be lost.
  - You are about to drop the column `idSecretaria` on the `Memo` table. All the data in the column will be lost.
  - You are about to drop the column `statusMemo` on the `Memo` table. All the data in the column will be lost.
  - You are about to drop the column `dataOcorrencia` on the `Ocorrencia` table. All the data in the column will be lost.
  - You are about to drop the column `idCivil` on the `Ocorrencia` table. All the data in the column will be lost.
  - You are about to drop the column `idTecnico` on the `Ocorrencia` table. All the data in the column will be lost.
  - You are about to drop the column `num_Casas` on the `Ocorrencia` table. All the data in the column will be lost.
  - You are about to drop the column `relato_Civil` on the `Ocorrencia` table. All the data in the column will be lost.
  - You are about to drop the column `lat` on the `Pluviometro` table. All the data in the column will be lost.
  - You are about to drop the column `longPluvi` on the `Pluviometro` table. All the data in the column will be lost.
  - You are about to drop the column `areaAfetada` on the `Relatorio` table. All the data in the column will be lost.
  - You are about to drop the column `dataAtendimento` on the `Relatorio` table. All the data in the column will be lost.
  - You are about to drop the column `dataGeracao` on the `Relatorio` table. All the data in the column will be lost.
  - You are about to drop the column `enfermos` on the `Relatorio` table. All the data in the column will be lost.
  - You are about to drop the column `idCasa` on the `Relatorio` table. All the data in the column will be lost.
  - You are about to drop the column `idOcorrencia` on the `Relatorio` table. All the data in the column will be lost.
  - You are about to drop the column `tipoConstrucao` on the `Relatorio` table. All the data in the column will be lost.
  - You are about to drop the column `tipoTalude` on the `Relatorio` table. All the data in the column will be lost.
  - You are about to alter the column `gravidade` on the `Relatorio` table. The data in that column could be lost. The data in that column will be cast from `VarChar(9)` to `Int`.
  - You are about to alter the column `vegetacao` on the `Relatorio` table. The data in that column could be lost. The data in that column will be cast from `VarChar(20)` to `Int`.
  - You are about to drop the column `nomeSecretaria` on the `Secretaria` table. All the data in the column will be lost.
  - You are about to drop the column `idCargo` on the `Secretario` table. All the data in the column will be lost.
  - You are about to drop the column `idSecretaria` on the `Secretario` table. All the data in the column will be lost.
  - You are about to drop the column `nomeSecretario` on the `Secretario` table. All the data in the column will be lost.
  - You are about to drop the column `idFuncionario` on the `Tecnico` table. All the data in the column will be lost.
  - You are about to drop the `Alerta_Chuva` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Alerta_Rio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Local_Ajuda` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Nivel_Chuva` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Nivel_Diario` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id_relatorio]` on the table `Afetados` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_relatorio]` on the table `Animal` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_relatorio]` on the table `DadosDaVistoria` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_funcionario]` on the table `Gestor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_relatorio]` on the table `Memo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_funcionario]` on the table `Tecnico` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_relatorio` to the `Afetados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_relatorio` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_cargo` to the `Cargo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `Civil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_casa` to the `Civil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_relatorio` to the `DadosDaVistoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codificado` to the `Foto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_relatorio` to the `Foto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_usuario` to the `Funcionario` table without a default value. This is not possible if the table is not empty.
  - Made the column `senha` on table `Funcionario` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `id_funcionario` to the `Gestor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_memo` to the `Memo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_relatorio` to the `Memo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_secretaria` to the `Memo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status_memo` to the `Memo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_ocorrencia` to the `Ocorrencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_civil` to the `Ocorrencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_tecnico` to the `Ocorrencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `num_casas` to the `Ocorrencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `relato_civil` to the `Ocorrencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `Pluviometro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `area_afetada` to the `Relatorio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_atendimento` to the `Relatorio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_geracao` to the `Relatorio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_ocorrencia` to the `Relatorio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `interdicao` to the `Relatorio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `situacao_vitimas` to the `Relatorio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_construcao` to the `Relatorio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_talude` to the `Relatorio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_secretaria` to the `Secretaria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_cargo` to the `Secretario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_secretaria` to the `Secretario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_secretario` to the `Secretario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_funcionario` to the `Tecnico` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Afetados` DROP FOREIGN KEY `Afetados_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Alerta_Chuva` DROP FOREIGN KEY `Alerta_Chuva_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Alerta_Rio` DROP FOREIGN KEY `Alerta_Rio_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Animal` DROP FOREIGN KEY `Animal_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Civil` DROP FOREIGN KEY `Civil_ibfk_1`;

-- DropForeignKey
ALTER TABLE `DadosDaVistoria` DROP FOREIGN KEY `DadosDaVistoria_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Foto` DROP FOREIGN KEY `Foto_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Foto` DROP FOREIGN KEY `Foto_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Gestor` DROP FOREIGN KEY `Gestor_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Local_Ajuda` DROP FOREIGN KEY `Local_Ajuda_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Memo` DROP FOREIGN KEY `Memo_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Memo` DROP FOREIGN KEY `Memo_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Memo` DROP FOREIGN KEY `Memo_ibfk_3`;

-- DropForeignKey
ALTER TABLE `Nivel_Chuva` DROP FOREIGN KEY `Nivel_Chuva_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Nivel_Diario` DROP FOREIGN KEY `Nivel_Diario_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Ocorrencia` DROP FOREIGN KEY `Ocorrencia_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Ocorrencia` DROP FOREIGN KEY `Ocorrencia_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Relatorio` DROP FOREIGN KEY `Relatorio_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Relatorio` DROP FOREIGN KEY `Relatorio_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Secretario` DROP FOREIGN KEY `Secretario_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Secretario` DROP FOREIGN KEY `Secretario_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Tecnico` DROP FOREIGN KEY `Tecnico_ibfk_1`;

-- AlterTable
ALTER TABLE `Afetados` DROP COLUMN `Criancas`,
    DROP COLUMN `idRelatorio`,
    ADD COLUMN `criancas` INTEGER NULL,
    ADD COLUMN `id_relatorio` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Animal` DROP COLUMN `esquinos`,
    DROP COLUMN `idRelatorio`,
    ADD COLUMN `equinos` INTEGER NULL,
    ADD COLUMN `id_relatorio` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Cargo` DROP COLUMN `nomeCargo`,
    ADD COLUMN `nome_cargo` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `Civil` DROP COLUMN `idEndereco`,
    ADD COLUMN `cep` CHAR(8) NOT NULL,
    ADD COLUMN `id_casa` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `DadosDaVistoria` DROP COLUMN `idRelatorio`,
    ADD COLUMN `id_relatorio` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Endereco` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`cep`);

-- AlterTable
ALTER TABLE `Fluviometro` DROP COLUMN `lat`,
    ADD COLUMN `latitude` DECIMAL(8, 3) NULL,
    MODIFY `longitude` DECIMAL(8, 3) NULL;

-- AlterTable
ALTER TABLE `Foto` DROP COLUMN `idEndereco`,
    DROP COLUMN `idRelatorio`,
    ADD COLUMN `codificado` LONGTEXT NOT NULL,
    ADD COLUMN `id_relatorio` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Funcionario` DROP COLUMN `tipoUsuario`,
    ADD COLUMN `tipo_usuario` INTEGER NOT NULL,
    MODIFY `senha` VARCHAR(70) NOT NULL;

-- AlterTable
ALTER TABLE `Gestor` DROP COLUMN `idFuncionario`,
    ADD COLUMN `id_funcionario` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Memo` DROP COLUMN `dataMemo`,
    DROP COLUMN `idCargo`,
    DROP COLUMN `idRelatorio`,
    DROP COLUMN `idSecretaria`,
    DROP COLUMN `statusMemo`,
    ADD COLUMN `data_memo` DATE NOT NULL,
    ADD COLUMN `id_relatorio` INTEGER NOT NULL,
    ADD COLUMN `id_secretaria` INTEGER NOT NULL,
    ADD COLUMN `status_memo` VARCHAR(355) NOT NULL;

-- AlterTable
ALTER TABLE `Ocorrencia` DROP COLUMN `dataOcorrencia`,
    DROP COLUMN `idCivil`,
    DROP COLUMN `idTecnico`,
    DROP COLUMN `num_Casas`,
    DROP COLUMN `relato_Civil`,
    ADD COLUMN `data_ocorrencia` DATE NOT NULL,
    ADD COLUMN `id_civil` INTEGER NOT NULL,
    ADD COLUMN `id_tecnico` INTEGER NOT NULL,
    ADD COLUMN `num_casas` INTEGER NOT NULL,
    ADD COLUMN `relato_civil` VARCHAR(355) NOT NULL;

-- AlterTable
ALTER TABLE `Pluviometro` DROP COLUMN `lat`,
    DROP COLUMN `longPluvi`,
    ADD COLUMN `latitude` DECIMAL(8, 3) NOT NULL,
    ADD COLUMN `longitude` DECIMAL(8, 3) NULL;

-- AlterTable
ALTER TABLE `Relatorio` DROP COLUMN `areaAfetada`,
    DROP COLUMN `dataAtendimento`,
    DROP COLUMN `dataGeracao`,
    DROP COLUMN `enfermos`,
    DROP COLUMN `idCasa`,
    DROP COLUMN `idOcorrencia`,
    DROP COLUMN `tipoConstrucao`,
    DROP COLUMN `tipoTalude`,
    ADD COLUMN `area_afetada` INTEGER NOT NULL,
    ADD COLUMN `data_atendimento` DATE NOT NULL,
    ADD COLUMN `data_geracao` DATE NOT NULL,
    ADD COLUMN `id_casa` INTEGER NULL,
    ADD COLUMN `id_ocorrencia` INTEGER NOT NULL,
    ADD COLUMN `interdicao` INTEGER NOT NULL,
    ADD COLUMN `situacao_vitimas` INTEGER NOT NULL,
    ADD COLUMN `tipo_construcao` INTEGER NOT NULL,
    ADD COLUMN `tipo_talude` INTEGER NOT NULL,
    MODIFY `gravidade` INTEGER NOT NULL,
    MODIFY `vegetacao` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Secretaria` DROP COLUMN `nomeSecretaria`,
    ADD COLUMN `nome_secretaria` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `Secretario` DROP COLUMN `idCargo`,
    DROP COLUMN `idSecretaria`,
    DROP COLUMN `nomeSecretario`,
    ADD COLUMN `id_cargo` INTEGER NOT NULL,
    ADD COLUMN `id_secretaria` INTEGER NOT NULL,
    ADD COLUMN `nome_secretario` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `Tecnico` DROP COLUMN `idFuncionario`,
    ADD COLUMN `id_funcionario` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Alerta_Chuva`;

-- DropTable
DROP TABLE `Alerta_Rio`;

-- DropTable
DROP TABLE `Local_Ajuda`;

-- DropTable
DROP TABLE `Nivel_Chuva`;

-- DropTable
DROP TABLE `Nivel_Diario`;

-- CreateTable
CREATE TABLE `AlertaChuva` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pluviometro` INTEGER NULL,
    `status_chuva` VARCHAR(50) NOT NULL,
    `data_chuva` DATETIME(0) NOT NULL,

    INDEX `id_pluviometro`(`id_pluviometro`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AlertaRio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_fluviometro` INTEGER NULL,
    `status_rio` VARCHAR(50) NULL,
    `data_alerta_rio` DATETIME(0) NOT NULL,

    INDEX `id_fluviometro`(`id_fluviometro`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comunicado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_gestor` INTEGER NOT NULL,
    `conteudo` VARCHAR(355) NOT NULL,

    INDEX `id_gestor`(`id_gestor`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LocalAjuda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` CHAR(8) NOT NULL,
    `tipo` VARCHAR(100) NULL,
    `conteudo` VARCHAR(355) NULL,

    INDEX `cep`(`cep`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NivelChuva` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pluviometro` INTEGER NULL,
    `chuva_em_mm` DECIMAL(5, 2) NULL,
    `data_chuva` DATETIME(0) NULL,

    INDEX `id_pluviometro`(`id_pluviometro`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NivelRio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_fluviometro` INTEGER NULL,
    `nivel_rio` DECIMAL(5, 2) NULL,
    `data_diario` DATETIME(0) NULL,

    INDEX `id_fluviometro`(`id_fluviometro`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Registro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_funcionario` INTEGER NOT NULL,
    `acao` INTEGER NOT NULL,
    `descricao` VARCHAR(127) NOT NULL,
    `momento` DATETIME(0) NOT NULL,

    INDEX `id_funcionario`(`id_funcionario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `id_relatorio` ON `Afetados`(`id_relatorio`);

-- CreateIndex
CREATE UNIQUE INDEX `id_relatorio` ON `Animal`(`id_relatorio`);

-- CreateIndex
CREATE INDEX `cep` ON `Casa`(`cep`);

-- CreateIndex
CREATE INDEX `cep` ON `Civil`(`cep`);

-- CreateIndex
CREATE INDEX `id_casa` ON `Civil`(`id_casa`);

-- CreateIndex
CREATE UNIQUE INDEX `id_relatorio` ON `DadosDaVistoria`(`id_relatorio`);

-- CreateIndex
CREATE INDEX `cep` ON `Fluviometro`(`cep`);

-- CreateIndex
CREATE INDEX `id_relatorio` ON `Foto`(`id_relatorio`);

-- CreateIndex
CREATE UNIQUE INDEX `id_funcionario` ON `Gestor`(`id_funcionario`);

-- CreateIndex
CREATE UNIQUE INDEX `id_relatorio` ON `Memo`(`id_relatorio`);

-- CreateIndex
CREATE INDEX `id_secretaria` ON `Memo`(`id_secretaria`);

-- CreateIndex
CREATE INDEX `id_civil` ON `Ocorrencia`(`id_civil`);

-- CreateIndex
CREATE INDEX `id_tecnico` ON `Ocorrencia`(`id_tecnico`);

-- CreateIndex
CREATE INDEX `cep` ON `Pluviometro`(`cep`);

-- CreateIndex
CREATE INDEX `id_casa` ON `Relatorio`(`id_casa`);

-- CreateIndex
CREATE INDEX `id_ocorrencia` ON `Relatorio`(`id_ocorrencia`);

-- CreateIndex
CREATE INDEX `id_cargo` ON `Secretario`(`id_cargo`);

-- CreateIndex
CREATE INDEX `id_secretaria` ON `Secretario`(`id_secretaria`);

-- CreateIndex
CREATE UNIQUE INDEX `id_funcionario` ON `Tecnico`(`id_funcionario`);

-- AddForeignKey
ALTER TABLE `Afetados` ADD CONSTRAINT `Afetados_ibfk_1` FOREIGN KEY (`id_relatorio`) REFERENCES `Relatorio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `AlertaChuva` ADD CONSTRAINT `AlertaChuva_ibfk_1` FOREIGN KEY (`id_pluviometro`) REFERENCES `Pluviometro`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `AlertaRio` ADD CONSTRAINT `AlertaRio_ibfk_1` FOREIGN KEY (`id_fluviometro`) REFERENCES `Fluviometro`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Animal` ADD CONSTRAINT `Animal_ibfk_1` FOREIGN KEY (`id_relatorio`) REFERENCES `Relatorio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Casa` ADD CONSTRAINT `Casa_ibfk_1` FOREIGN KEY (`cep`) REFERENCES `Endereco`(`cep`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Civil` ADD CONSTRAINT `Civil_ibfk_1` FOREIGN KEY (`id_casa`) REFERENCES `Casa`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Civil` ADD CONSTRAINT `Civil_ibfk_2` FOREIGN KEY (`cep`) REFERENCES `Endereco`(`cep`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Comunicado` ADD CONSTRAINT `Comunicado_ibfk_1` FOREIGN KEY (`id_gestor`) REFERENCES `Gestor`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `DadosDaVistoria` ADD CONSTRAINT `DadosDaVistoria_ibfk_1` FOREIGN KEY (`id_relatorio`) REFERENCES `Relatorio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Fluviometro` ADD CONSTRAINT `Fluviometro_ibfk_1` FOREIGN KEY (`cep`) REFERENCES `Endereco`(`cep`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Foto` ADD CONSTRAINT `Foto_ibfk_1` FOREIGN KEY (`id_relatorio`) REFERENCES `Relatorio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Gestor` ADD CONSTRAINT `Gestor_ibfk_1` FOREIGN KEY (`id_funcionario`) REFERENCES `Funcionario`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `LocalAjuda` ADD CONSTRAINT `LocalAjuda_ibfk_1` FOREIGN KEY (`cep`) REFERENCES `Endereco`(`cep`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Memo` ADD CONSTRAINT `Memo_ibfk_1` FOREIGN KEY (`id_relatorio`) REFERENCES `Relatorio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Memo` ADD CONSTRAINT `Memo_ibfk_2` FOREIGN KEY (`id_secretaria`) REFERENCES `Secretaria`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `NivelChuva` ADD CONSTRAINT `NivelChuva_ibfk_1` FOREIGN KEY (`id_pluviometro`) REFERENCES `Pluviometro`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `NivelRio` ADD CONSTRAINT `NivelRio_ibfk_1` FOREIGN KEY (`id_fluviometro`) REFERENCES `Fluviometro`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ocorrencia` ADD CONSTRAINT `Ocorrencia_ibfk_1` FOREIGN KEY (`id_tecnico`) REFERENCES `Tecnico`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ocorrencia` ADD CONSTRAINT `Ocorrencia_ibfk_2` FOREIGN KEY (`id_civil`) REFERENCES `Civil`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Pluviometro` ADD CONSTRAINT `Pluviometro_ibfk_1` FOREIGN KEY (`cep`) REFERENCES `Endereco`(`cep`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Registro` ADD CONSTRAINT `Registro_ibfk_1` FOREIGN KEY (`id_funcionario`) REFERENCES `Funcionario`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Relatorio` ADD CONSTRAINT `Relatorio_ibfk_1` FOREIGN KEY (`id_ocorrencia`) REFERENCES `Ocorrencia`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Relatorio` ADD CONSTRAINT `Relatorio_ibfk_2` FOREIGN KEY (`id_casa`) REFERENCES `Casa`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Secretario` ADD CONSTRAINT `Secretario_ibfk_1` FOREIGN KEY (`id_secretaria`) REFERENCES `Secretaria`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Secretario` ADD CONSTRAINT `Secretario_ibfk_2` FOREIGN KEY (`id_cargo`) REFERENCES `Cargo`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Tecnico` ADD CONSTRAINT `Tecnico_ibfk_1` FOREIGN KEY (`id_funcionario`) REFERENCES `Funcionario`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
