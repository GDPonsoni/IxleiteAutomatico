import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { randomUUID } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readJsonFile = (filename) => {
  try {
    return JSON.parse(fs.readFileSync(path.join(__dirname, filename), 'utf8'));
  } catch {
    return null;
  }
};

const writeJsonFile = (filename, data) => {
  fs.writeFileSync(path.join(__dirname, filename), JSON.stringify(data, null, 2));
};

const sameId = (a, b) => a !== undefined && a !== null && b !== undefined && b !== null && String(a) === String(b);

export const normalizeBoolean = (value, fallback = false) => {
  if (value === undefined || value === null) return fallback;
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') return value === 'true' || value === '1';
  return Boolean(value);
};

export const normalizeNumber = (value, fallback = 0) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const DEFAULT_CORES = {
  primaria: '#DC0000',
  secundaria: '#FFD700',
  branca: '#FFFFFF',
  preta: '#000000'
};

const DEFAULT_CONFIG = {
  logo: null,
  background: null,
  motivacaoDestaque: null,
  cores: DEFAULT_CORES
};

const DEFAULT_COMODO_CONFIG = {
  imagem: null,
  apenassuiteMembers: false,
  pessoasNecessarias: 1,
  permitirMultiplasAtribuicoes: false,
  obrigatorio: true,
  ordem: 0
};

const normalizeConfig = (config = {}) => ({
  ...DEFAULT_CONFIG,
  ...config,
  cores: {
    ...DEFAULT_CORES,
    ...(config.cores || {})
  }
});

const normalizeComodo = (comodo = {}, index = 0) => ({
  ...DEFAULT_COMODO_CONFIG,
  ...comodo,
  pessoasNecessarias: Math.max(1, Math.min(10, normalizeNumber(comodo.pessoasNecessarias, 1))),
  permitirMultiplasAtribuicoes: normalizeBoolean(comodo.permitirMultiplasAtribuicoes, false),
  obrigatorio: normalizeBoolean(comodo.obrigatorio, true),
  ordem: Math.max(0, Math.trunc(normalizeNumber(comodo.ordem, index)))
});

// ===== INTEGRANTES =====
export const IntegrantesStore = {
  list() {
    return readJsonFile('integrantes.json') || [];
  },
  findById(id) {
    return this.list().find((integrante) => sameId(integrante.id, id)) || null;
  },
  findByNome(nome, { excludeId } = {}) {
    const alvo = String(nome || '').trim().toLowerCase();
    return this.list().find((integrante) =>
      String(integrante.nome || '').trim().toLowerCase() === alvo &&
      !sameId(integrante.id, excludeId)
    ) || null;
  },
  create({ nome, isSuite }) {
    const integrantes = this.list();
    const novo = {
      id: randomUUID(),
      nome: nome.trim(),
      isSuite: normalizeBoolean(isSuite, false),
      ativo: true
    };
    integrantes.push(novo);
    writeJsonFile('integrantes.json', integrantes);
    return novo;
  },
  update(id, changes) {
    const integrantes = this.list();
    const idx = integrantes.findIndex((integrante) => sameId(integrante.id, id));
    if (idx === -1) return null;
    const atualizado = { ...integrantes[idx], ...changes };
    integrantes[idx] = atualizado;
    writeJsonFile('integrantes.json', integrantes);
    return atualizado;
  },
  remove(id) {
    const integrantes = this.list();
    const existe = integrantes.some((integrante) => sameId(integrante.id, id));
    if (!existe) return false;
    writeJsonFile('integrantes.json', integrantes.filter((integrante) => !sameId(integrante.id, id)));
    return true;
  }
};

// ===== COMODOS =====
export const ComodosStore = {
  list() {
    const comodos = readJsonFile('comodos.json') || [];
    return comodos.map((comodo, index) => normalizeComodo(comodo, index));
  },
  findById(id) {
    return this.list().find((comodo) => sameId(comodo.id, id)) || null;
  },
  create(data) {
    const comodos = this.list();
    const novo = normalizeComodo({ ...data, id: randomUUID() }, comodos.length + 1);
    const bruto = readJsonFile('comodos.json') || [];
    bruto.push(novo);
    writeJsonFile('comodos.json', bruto);
    return novo;
  },
  update(id, changes) {
    const bruto = readJsonFile('comodos.json') || [];
    const idx = bruto.findIndex((comodo) => sameId(comodo.id, id));
    if (idx === -1) return null;
    const atualizado = normalizeComodo({ ...bruto[idx], ...changes }, idx);
    bruto[idx] = atualizado;
    writeJsonFile('comodos.json', bruto);
    return atualizado;
  },
  remove(id) {
    const bruto = readJsonFile('comodos.json') || [];
    const existe = bruto.some((comodo) => sameId(comodo.id, id));
    if (!existe) return false;
    writeJsonFile('comodos.json', bruto.filter((comodo) => !sameId(comodo.id, id)));
    return true;
  }
};

// ===== INFRAÇÕES =====
export const InfracoesStore = {
  list() {
    return readJsonFile('infracoes.json') || [];
  },
  findById(id) {
    return this.list().find((infracao) => sameId(infracao.id, id)) || null;
  },
  listByIntegranteId(integranteId) {
    return this.list().filter((infracao) => sameId(infracao.integranteId, integranteId));
  },
  create({ integranteId, integranteNome, descricao, dataSemana }) {
    const infracoes = this.list();
    const nova = {
      id: randomUUID(),
      integranteId: String(integranteId),
      integranteNome,
      descricao: descricao.trim(),
      dataSemana: dataSemana || new Date().toISOString(),
      dataRegistro: new Date().toISOString()
    };
    infracoes.push(nova);
    writeJsonFile('infracoes.json', infracoes);
    return nova;
  },
  update(id, changes) {
    const infracoes = this.list();
    const idx = infracoes.findIndex((infracao) => sameId(infracao.id, id));
    if (idx === -1) return null;
    const atualizada = { ...infracoes[idx], ...changes };
    infracoes[idx] = atualizada;
    writeJsonFile('infracoes.json', infracoes);
    return atualizada;
  },
  remove(id) {
    const infracoes = this.list();
    const existe = infracoes.some((infracao) => sameId(infracao.id, id));
    if (!existe) return false;
    writeJsonFile('infracoes.json', infracoes.filter((infracao) => !sameId(infracao.id, id)));
    return true;
  }
};

// ===== ESCALAS =====
export const EscalasStore = {
  list() {
    return readJsonFile('escalas.json') || [];
  },
  findById(id) {
    return this.list().find((escala) => sameId(escala.id, id)) || null;
  },
  listBySemana(ano, semana) {
    return this.list().filter((escala) => escala.ano === ano && escala.semana === semana);
  },
  replaceSemana(ano, semana, novasLinhas) {
    const restante = this.list().filter((escala) => !(escala.ano === ano && escala.semana === semana));
    writeJsonFile('escalas.json', [...restante, ...novasLinhas]);
    return novasLinhas;
  },
  removeSemana(ano, semana) {
    const escalas = this.list();
    const restante = escalas.filter((escala) => !(escala.ano === ano && escala.semana === semana));
    writeJsonFile('escalas.json', restante);
    return escalas.length - restante.length;
  },
  update(id, changes) {
    const escalas = this.list();
    const idx = escalas.findIndex((escala) => sameId(escala.id, id));
    if (idx === -1) return null;
    const atualizada = { ...escalas[idx], ...changes };
    escalas[idx] = atualizada;
    writeJsonFile('escalas.json', escalas);
    return atualizada;
  },
  updateMany(updates) {
    const escalas = this.list();
    const resultados = [];
    updates.forEach(({ id, changes }) => {
      const idx = escalas.findIndex((escala) => sameId(escala.id, id));
      if (idx !== -1) {
        escalas[idx] = { ...escalas[idx], ...changes };
        resultados.push(escalas[idx]);
      }
    });
    writeJsonFile('escalas.json', escalas);
    return resultados;
  }
};

// ===== CONFIG =====
export const ConfigStore = {
  get() {
    return normalizeConfig(readJsonFile('config.json') || {});
  },
  save(config) {
    writeJsonFile('config.json', config);
    return config;
  }
};
