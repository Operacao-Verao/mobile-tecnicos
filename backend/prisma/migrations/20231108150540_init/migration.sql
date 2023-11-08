-- CreateTable
CREATE TABLE `Afetados` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_relatorio` INTEGER NOT NULL,
    `adultos` INTEGER NULL,
    `criancas` INTEGER NULL,
    `idosos` INTEGER NULL,
    `especiais` INTEGER NULL,
    `mortos` INTEGER NULL,
    `feridos` INTEGER NULL,
    `enfermos` INTEGER NULL,

    UNIQUE INDEX `id_relatorio`(`id_relatorio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
CREATE TABLE `Animal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_relatorio` INTEGER NOT NULL,
    `caes` INTEGER NULL,
    `gatos` INTEGER NULL,
    `aves` INTEGER NULL,
    `equinos` INTEGER NULL,

    UNIQUE INDEX `id_relatorio`(`id_relatorio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cargo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_cargo` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Casa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_residencial` INTEGER NOT NULL,
    `interdicao` INTEGER NOT NULL,
    `complemento` VARCHAR(50) NULL,

    INDEX `id_residencial`(`id_residencial`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Civil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_residencial` INTEGER NULL,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(70) NULL,
    `senha` VARCHAR(70) NOT NULL,
    `cpf` CHAR(11) NOT NULL,
    `celular` CHAR(11) NOT NULL,
    `telefone` CHAR(10) NULL,

    UNIQUE INDEX `cpf`(`cpf`),
    INDEX `id_residencial`(`id_residencial`),
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
CREATE TABLE `DadosDaVistoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_relatorio` INTEGER NOT NULL,
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

    UNIQUE INDEX `id_relatorio`(`id_relatorio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `cep` CHAR(8) NOT NULL,
    `rua` VARCHAR(155) NOT NULL,
    `bairro` VARCHAR(100) NOT NULL,
    `cidade` VARCHAR(70) NULL,

    PRIMARY KEY (`cep`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fluviometro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` CHAR(8) NULL,
    `latitude` DECIMAL(8, 3) NULL,
    `longitude` DECIMAL(8, 3) NULL,

    INDEX `cep`(`cep`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Foto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_relatorio` INTEGER NOT NULL,
    `codificado` LONGTEXT NOT NULL,

    INDEX `id_relatorio`(`id_relatorio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Funcionario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `senha` VARCHAR(70) NOT NULL,
    `tipo_usuario` INTEGER NOT NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gestor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_funcionario` INTEGER NOT NULL,

    UNIQUE INDEX `id_funcionario`(`id_funcionario`),
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
CREATE TABLE `Memo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_relatorio` INTEGER NOT NULL,
    `id_secretaria` INTEGER NOT NULL,
    `data_memo` DATETIME(0) NOT NULL,
    `status_memo` VARCHAR(355) NOT NULL,
    `setor` VARCHAR(75) NOT NULL,
    `processo` CHAR(10) NULL,

    UNIQUE INDEX `id_relatorio`(`id_relatorio`),
    INDEX `id_secretaria`(`id_secretaria`),
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
CREATE TABLE `Ocorrencia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_tecnico` INTEGER NULL,
    `id_atendente` INTEGER NULL,
    `id_civil` INTEGER NOT NULL,
    `id_residencial` INTEGER NOT NULL,
    `acionamento` VARCHAR(100) NOT NULL,
    `relato_civil` VARCHAR(2047) NOT NULL,
    `num_casas` INTEGER NOT NULL,
    `aprovado` BOOLEAN NOT NULL,
    `encerrado` BOOLEAN NOT NULL,
    `data_ocorrencia` DATETIME(0) NOT NULL,

    INDEX `id_civil`(`id_civil`),
    INDEX `id_tecnico`(`id_tecnico`),
    INDEX `id_residencial`(`id_residencial`),
    INDEX `id_atendente`(`id_atendente`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pluviometro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` CHAR(8) NOT NULL,
    `latitude` DECIMAL(8, 3) NOT NULL,
    `longitude` DECIMAL(8, 3) NULL,

    INDEX `cep`(`cep`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Registro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_funcionario` INTEGER NOT NULL,
    `acao` INTEGER NOT NULL,
    `descricao` VARCHAR(355) NOT NULL,
    `momento` DATETIME(0) NOT NULL,

    INDEX `id_funcionario`(`id_funcionario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Relatorio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_ocorrencia` INTEGER NOT NULL,
    `id_casa` INTEGER NOT NULL,
    `gravidade` INTEGER NOT NULL,
    `relatorio` VARCHAR(2047) NOT NULL,
    `encaminhamento` VARCHAR(155) NOT NULL,
    `memorando` VARCHAR(100) NOT NULL,
    `oficio` VARCHAR(100) NOT NULL,
    `processo` VARCHAR(100) NOT NULL,
    `assunto` VARCHAR(200) NOT NULL,
    `observacoes` VARCHAR(2047) NOT NULL,
    `area_afetada` INTEGER NOT NULL,
    `tipo_construcao` INTEGER NOT NULL,
    `tipo_talude` INTEGER NOT NULL,
    `vegetacao` INTEGER NOT NULL,
    `situacao_vitimas` INTEGER NOT NULL,
    `interdicao` INTEGER NOT NULL,
    `danos_materiais` BOOLEAN NOT NULL,
    `data_geracao` DATETIME(0) NOT NULL,
    `data_atendimento` DATETIME(0) NOT NULL,

    INDEX `id_ocorrencia`(`id_ocorrencia`),
    INDEX `id_casa`(`id_casa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Secretaria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_secretaria` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Secretario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_secretaria` INTEGER NOT NULL,
    `id_cargo` INTEGER NOT NULL,
    `nome_secretario` VARCHAR(100) NOT NULL,

    INDEX `id_cargo`(`id_cargo`),
    INDEX `id_secretaria`(`id_secretaria`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tecnico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_funcionario` INTEGER NOT NULL,
    `ativo` BOOLEAN NOT NULL,

    UNIQUE INDEX `id_funcionario`(`id_funcionario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceWorkerData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sw_endpoint` VARCHAR(250) NOT NULL,
    `auth` VARCHAR(40) NOT NULL,
    `p256dh` VARCHAR(110) NOT NULL,
    `id_gestor` INTEGER NOT NULL,

    INDEX `id_gestor`(`id_gestor`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Residencial` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` CHAR(8) NOT NULL,
    `numero` VARCHAR(10) NOT NULL,

    UNIQUE INDEX `numero`(`numero`),
    INDEX `cep`(`cep`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Afetados` ADD CONSTRAINT `Afetados_ibfk_1` FOREIGN KEY (`id_relatorio`) REFERENCES `Relatorio`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `AlertaChuva` ADD CONSTRAINT `AlertaChuva_ibfk_1` FOREIGN KEY (`id_pluviometro`) REFERENCES `Pluviometro`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `AlertaRio` ADD CONSTRAINT `AlertaRio_ibfk_1` FOREIGN KEY (`id_fluviometro`) REFERENCES `Fluviometro`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Animal` ADD CONSTRAINT `Animal_ibfk_1` FOREIGN KEY (`id_relatorio`) REFERENCES `Relatorio`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Casa` ADD CONSTRAINT `Casa_ibfk_1` FOREIGN KEY (`id_residencial`) REFERENCES `Residencial`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Civil` ADD CONSTRAINT `Civil_ibfk_1` FOREIGN KEY (`id_residencial`) REFERENCES `Residencial`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Comunicado` ADD CONSTRAINT `Comunicado_ibfk_1` FOREIGN KEY (`id_gestor`) REFERENCES `Gestor`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `DadosDaVistoria` ADD CONSTRAINT `DadosDaVistoria_ibfk_1` FOREIGN KEY (`id_relatorio`) REFERENCES `Relatorio`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Fluviometro` ADD CONSTRAINT `Fluviometro_ibfk_1` FOREIGN KEY (`cep`) REFERENCES `Endereco`(`cep`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Foto` ADD CONSTRAINT `Foto_ibfk_1` FOREIGN KEY (`id_relatorio`) REFERENCES `Relatorio`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Gestor` ADD CONSTRAINT `Gestor_ibfk_1` FOREIGN KEY (`id_funcionario`) REFERENCES `Funcionario`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `LocalAjuda` ADD CONSTRAINT `LocalAjuda_ibfk_1` FOREIGN KEY (`cep`) REFERENCES `Endereco`(`cep`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Memo` ADD CONSTRAINT `Memo_ibfk_1` FOREIGN KEY (`id_relatorio`) REFERENCES `Relatorio`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Memo` ADD CONSTRAINT `Memo_ibfk_2` FOREIGN KEY (`id_secretaria`) REFERENCES `Secretaria`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `NivelChuva` ADD CONSTRAINT `NivelChuva_ibfk_1` FOREIGN KEY (`id_pluviometro`) REFERENCES `Pluviometro`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `NivelRio` ADD CONSTRAINT `NivelRio_ibfk_1` FOREIGN KEY (`id_fluviometro`) REFERENCES `Fluviometro`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Ocorrencia` ADD CONSTRAINT `Ocorrencia_ibfk_1` FOREIGN KEY (`id_tecnico`) REFERENCES `Tecnico`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Ocorrencia` ADD CONSTRAINT `Ocorrencia_ibfk_2` FOREIGN KEY (`id_atendente`) REFERENCES `Funcionario`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Ocorrencia` ADD CONSTRAINT `Ocorrencia_ibfk_3` FOREIGN KEY (`id_civil`) REFERENCES `Civil`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Ocorrencia` ADD CONSTRAINT `Ocorrencia_ibfk_4` FOREIGN KEY (`id_residencial`) REFERENCES `Residencial`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Pluviometro` ADD CONSTRAINT `Pluviometro_ibfk_1` FOREIGN KEY (`cep`) REFERENCES `Endereco`(`cep`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Registro` ADD CONSTRAINT `Registro_ibfk_1` FOREIGN KEY (`id_funcionario`) REFERENCES `Funcionario`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Relatorio` ADD CONSTRAINT `Relatorio_ibfk_1` FOREIGN KEY (`id_ocorrencia`) REFERENCES `Ocorrencia`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Relatorio` ADD CONSTRAINT `Relatorio_ibfk_2` FOREIGN KEY (`id_casa`) REFERENCES `Casa`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Secretario` ADD CONSTRAINT `Secretario_ibfk_1` FOREIGN KEY (`id_secretaria`) REFERENCES `Secretaria`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Secretario` ADD CONSTRAINT `Secretario_ibfk_2` FOREIGN KEY (`id_cargo`) REFERENCES `Cargo`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Tecnico` ADD CONSTRAINT `Tecnico_ibfk_1` FOREIGN KEY (`id_funcionario`) REFERENCES `Funcionario`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `ServiceWorkerData` ADD CONSTRAINT `ServiceWorkerData_ibfk_1` FOREIGN KEY (`id_gestor`) REFERENCES `Gestor`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Residencial` ADD CONSTRAINT `Residencial_ibfk_1` FOREIGN KEY (`cep`) REFERENCES `Endereco`(`cep`) ON DELETE RESTRICT ON UPDATE RESTRICT;
