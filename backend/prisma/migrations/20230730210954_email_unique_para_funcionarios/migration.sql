-- CreateTable
CREATE TABLE `Afetados` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idRelatorio` INTEGER NULL,
    `adultos` INTEGER NULL,
    `Criancas` INTEGER NULL,
    `idosos` INTEGER NULL,
    `especiais` INTEGER NULL,
    `mortos` INTEGER NULL,
    `feridos` INTEGER NULL,
    `enfermos` INTEGER NULL,

    INDEX `idRelatorio`(`idRelatorio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alerta_Chuva` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idPluv` INTEGER NULL,
    `statusChuva` VARCHAR(50) NOT NULL,
    `dataChuva` DATETIME(0) NOT NULL,

    INDEX `idPluv`(`idPluv`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alerta_Rio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idFluv` INTEGER NULL,
    `statusRio` VARCHAR(50) NULL,
    `dataAlertaRio` DATETIME(0) NOT NULL,

    INDEX `idFluv`(`idFluv`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Animal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idRelatorio` INTEGER NULL,
    `caes` INTEGER NULL,
    `gatos` INTEGER NULL,
    `aves` INTEGER NULL,
    `esquinos` INTEGER NULL,

    INDEX `idRelatorio`(`idRelatorio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cargo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeCargo` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Casa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` CHAR(8) NOT NULL,
    `numero` VARCHAR(10) NULL,
    `complemento` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Civil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idEndereco` INTEGER NULL,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(70) NULL,
    `senha` VARCHAR(70) NOT NULL,
    `cpf` CHAR(11) NOT NULL,
    `celular` CHAR(11) NOT NULL,
    `telefone` CHAR(10) NULL,

    UNIQUE INDEX `email`(`email`),
    UNIQUE INDEX `cpf`(`cpf`),
    INDEX `idEndereco`(`idEndereco`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DadosDaVistoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idRelatorio` INTEGER NULL,
    `desmoronamento` BOOLEAN NULL,
    `deslizamento` BOOLEAN NULL,
    `esgoto_escoamento` BOOLEAN NULL,
    `erosao` BOOLEAN NULL,
    `inundacao` BOOLEAN NULL,
    `incendio` BOOLEAN NULL,
    `arvores` BOOLEAN NULL,
    `infiltracao_trinca` BOOLEAN NULL,
    `judicial` BOOLEAN NULL,
    `monitoramento` BOOLEAN NULL,
    `transito` BOOLEAN NULL,
    `outros` VARCHAR(355) NULL,

    INDEX `idRelatorio`(`idRelatorio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` CHAR(8) NOT NULL,
    `rua` VARCHAR(155) NOT NULL,
    `bairro` VARCHAR(100) NOT NULL,
    `cidade` VARCHAR(70) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fluviometro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` CHAR(8) NULL,
    `lat` DECIMAL(6, 2) NULL,
    `longitude` DECIMAL(6, 2) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Foto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idRelatorio` INTEGER NULL,
    `idEndereco` INTEGER NULL,

    INDEX `idEndereco`(`idEndereco`),
    INDEX `idRelatorio`(`idRelatorio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Funcionario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NULL,
    `senha` VARCHAR(70) NULL,
    `tipoUsuario` VARCHAR(100) NULL,

    UNIQUE INDEX `Funcionario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gestor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idFuncionario` INTEGER NULL,

    INDEX `idFuncionario`(`idFuncionario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Local_Ajuda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idEndereco` INTEGER NULL,
    `tipo` VARCHAR(100) NULL,
    `conteudo` VARCHAR(355) NULL,
    `cepEndereco` CHAR(8) NULL,

    INDEX `idEndereco`(`idEndereco`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Memo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idRelatorio` INTEGER NULL,
    `idSecretaria` INTEGER NULL,
    `idCargo` INTEGER NULL,
    `dataMemo` DATE NOT NULL,
    `statusMemo` VARCHAR(355) NOT NULL,
    `processo` CHAR(10) NULL,

    INDEX `idCargo`(`idCargo`),
    INDEX `idRelatorio`(`idRelatorio`),
    INDEX `idSecretaria`(`idSecretaria`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nivel_Chuva` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idPluv` INTEGER NULL,
    `chuva_em_mm` DECIMAL(3, 2) NULL,
    `dataChuva` DATE NULL,

    INDEX `idPluv`(`idPluv`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nivel_Diario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idFluv` INTEGER NULL,
    `nivel_rio` DECIMAL(3, 2) NULL,
    `data_Diario` DATE NULL,

    INDEX `idFluv`(`idFluv`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ocorrencia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idTecnico` INTEGER NULL,
    `idCivil` INTEGER NULL,
    `acionamento` VARCHAR(100) NOT NULL,
    `relato_Civil` VARCHAR(355) NOT NULL,
    `num_Casas` INTEGER NOT NULL,
    `aprovado` BOOLEAN NOT NULL,
    `dataOcorrencia` DATE NOT NULL,

    INDEX `idCivil`(`idCivil`),
    INDEX `idTecnico`(`idTecnico`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pluviometro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` CHAR(8) NOT NULL,
    `lat` DECIMAL(6, 2) NOT NULL,
    `longPluvi` DECIMAL(6, 2) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Relatorio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idOcorrencia` INTEGER NULL,
    `idCasa` INTEGER NULL,
    `enfermos` INTEGER NOT NULL,
    `gravidade` VARCHAR(9) NOT NULL,
    `relatorio` VARCHAR(355) NOT NULL,
    `encaminhamento` VARCHAR(155) NOT NULL,
    `memorando` VARCHAR(100) NOT NULL,
    `oficio` VARCHAR(100) NOT NULL,
    `processo` VARCHAR(100) NOT NULL,
    `assunto` VARCHAR(200) NOT NULL,
    `observacoes` VARCHAR(355) NOT NULL,
    `areaAfetada` VARCHAR(10) NOT NULL,
    `tipoConstrucao` VARCHAR(9) NOT NULL,
    `tipoTalude` VARCHAR(8) NOT NULL,
    `vegetacao` VARCHAR(20) NOT NULL,
    `danos_materiais` BOOLEAN NOT NULL,
    `dataGeracao` DATE NOT NULL,
    `dataAtendimento` DATE NOT NULL,

    INDEX `idCasa`(`idCasa`),
    INDEX `idOcorrencia`(`idOcorrencia`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Secretaria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeSecretaria` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Secretario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idSecretaria` INTEGER NULL,
    `idCargo` INTEGER NULL,
    `nomeSecretario` VARCHAR(100) NOT NULL,

    INDEX `idCargo`(`idCargo`),
    INDEX `idSecretaria`(`idSecretaria`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tecnico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idFuncionario` INTEGER NULL,

    INDEX `idFuncionario`(`idFuncionario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Afetados` ADD CONSTRAINT `Afetados_ibfk_1` FOREIGN KEY (`idRelatorio`) REFERENCES `Relatorio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Alerta_Chuva` ADD CONSTRAINT `Alerta_Chuva_ibfk_1` FOREIGN KEY (`idPluv`) REFERENCES `Pluviometro`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Alerta_Rio` ADD CONSTRAINT `Alerta_Rio_ibfk_1` FOREIGN KEY (`idFluv`) REFERENCES `Fluviometro`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Animal` ADD CONSTRAINT `Animal_ibfk_1` FOREIGN KEY (`idRelatorio`) REFERENCES `Relatorio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Civil` ADD CONSTRAINT `Civil_ibfk_1` FOREIGN KEY (`idEndereco`) REFERENCES `Endereco`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `DadosDaVistoria` ADD CONSTRAINT `DadosDaVistoria_ibfk_1` FOREIGN KEY (`idRelatorio`) REFERENCES `Relatorio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Foto` ADD CONSTRAINT `Foto_ibfk_1` FOREIGN KEY (`idRelatorio`) REFERENCES `Relatorio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Foto` ADD CONSTRAINT `Foto_ibfk_2` FOREIGN KEY (`idEndereco`) REFERENCES `Endereco`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Gestor` ADD CONSTRAINT `Gestor_ibfk_1` FOREIGN KEY (`idFuncionario`) REFERENCES `Funcionario`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Local_Ajuda` ADD CONSTRAINT `Local_Ajuda_ibfk_1` FOREIGN KEY (`idEndereco`) REFERENCES `Endereco`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Memo` ADD CONSTRAINT `Memo_ibfk_1` FOREIGN KEY (`idRelatorio`) REFERENCES `Relatorio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Memo` ADD CONSTRAINT `Memo_ibfk_2` FOREIGN KEY (`idSecretaria`) REFERENCES `Secretaria`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Memo` ADD CONSTRAINT `Memo_ibfk_3` FOREIGN KEY (`idCargo`) REFERENCES `Cargo`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Nivel_Chuva` ADD CONSTRAINT `Nivel_Chuva_ibfk_1` FOREIGN KEY (`idPluv`) REFERENCES `Pluviometro`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Nivel_Diario` ADD CONSTRAINT `Nivel_Diario_ibfk_1` FOREIGN KEY (`idFluv`) REFERENCES `Fluviometro`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ocorrencia` ADD CONSTRAINT `Ocorrencia_ibfk_1` FOREIGN KEY (`idTecnico`) REFERENCES `Tecnico`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ocorrencia` ADD CONSTRAINT `Ocorrencia_ibfk_2` FOREIGN KEY (`idCivil`) REFERENCES `Civil`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Relatorio` ADD CONSTRAINT `Relatorio_ibfk_1` FOREIGN KEY (`idOcorrencia`) REFERENCES `Ocorrencia`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Relatorio` ADD CONSTRAINT `Relatorio_ibfk_2` FOREIGN KEY (`idCasa`) REFERENCES `Casa`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Secretario` ADD CONSTRAINT `Secretario_ibfk_1` FOREIGN KEY (`idSecretaria`) REFERENCES `Secretaria`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Secretario` ADD CONSTRAINT `Secretario_ibfk_2` FOREIGN KEY (`idCargo`) REFERENCES `Cargo`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Tecnico` ADD CONSTRAINT `Tecnico_ibfk_1` FOREIGN KEY (`idFuncionario`) REFERENCES `Funcionario`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
