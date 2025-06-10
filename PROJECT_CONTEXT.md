# Contexto do Projeto - Couple in Control

## 🏗️ Estrutura do Projeto

```
src/
├── app/          # Páginas do Expo Router
├── components/   # Componentes reutilizáveis
├── hooks/        # Hooks personalizados
├── styles/       # Estilos globais e tema
└── @types/       # Definições de tipos TypeScript
```

## 🛠️ Tecnologias Principais

- **Framework**: React Native com Expo
- **Linguagem**: TypeScript
- **Estilização**: NativeWind (TailwindCSS para React Native)
- **Navegação**: Expo Router
- **Formulários**: React Hook Form
- **Animações**: React Native Reanimated
- **Persistência**: AsyncStorage
- **Linting**: ESLint + Prettier
- **Gerenciador de Pacotes**: Yarn

## 🎨 Sistema de Tema

- Utiliza NativeWind para gerenciamento de tema
- Suporte a modo claro/escuro
- Persistência do tema com AsyncStorage
- Animações suaves na transição de temas
- Cores personalizadas definidas em `src/styles/colors.ts`

## 📝 Padrões de Código

- **Estilo**: 
  - Sem ponto e vírgula
  - Aspas simples
  - Indentação de 2 espaços
  - Máximo de 80 caracteres por linha

- **Componentes**:
  - Nomenclatura em PascalCase
  - Um componente por arquivo
  - Estilização com NativeWind
  - Tipagem TypeScript

- **Hooks**:
  - Nomenclatura em camelCase
  - Prefixo 'use' para hooks personalizados
  - Tipagem de retorno e parâmetros

## 🔧 Configurações

### ESLint
- Configurado para TypeScript
- Integração com Prettier
- Regras específicas para React Native
- Sem ponto e vírgula

### Prettier
- Integrado com ESLint
- Configurações de formatação consistentes
- Sem ponto e vírgula

### NativeWind
- Configurado para modo escuro
- Cores personalizadas
- Variáveis CSS para temas

## 📱 Funcionalidades Principais

1. **Gerenciamento de Tema**
   - Toggle entre modo claro/escuro
   - Persistência da preferência
   - Animações suaves

2. **Navegação**
   - Sistema de tabs
   - Rotas protegidas
   - Navegação tipo-stack

3. **Formulários**
   - Validação com React Hook Form
   - Campos controlados
   - Feedback de erros

## 🔄 Fluxos Comuns

1. **Desenvolvimento**
   ```bash
   # Iniciar projeto
   yarn start

   # Rodar em iOS
   yarn ios

   # Rodar em Android
   yarn android

   # Linting
   yarn lint
   yarn lint:fix
   ```

2. **Estilização**
   - Usar classes NativeWind
   - Seguir sistema de cores definido
   - Manter consistência com tema

3. **Componentes**
   - Criar em `src/components`
   - Exportar via `src/components/index.ts`
   - Incluir tipos TypeScript

## 📦 Dependências Principais

```json
{
  "dependencies": {
    "expo": "^50.0.19",
    "nativewind": "^4.1.23",
    "react-hook-form": "^7.57.0",
    "react-native-reanimated": "3.16.2"
  }
}
```

## 🎯 Objetivos do Projeto

- Aplicativo de controle financeiro para casais
- Interface intuitiva e responsiva
- Suporte a temas claro/escuro
- Experiência de usuário fluida
- Código limpo e manutenível

## 📚 Convenções de Nomenclatura

- **Arquivos**: kebab-case
- **Componentes**: PascalCase
- **Hooks**: camelCase com prefixo 'use'
- **Tipos**: PascalCase com prefixo 'T' ou sufixo 'Type'
- **Constantes**: UPPER_SNAKE_CASE
- **Funções**: camelCase
- **Variáveis**: camelCase

## 🔍 Análise Inicial Recomendada

Ao iniciar uma nova sessão, é recomendado:

1. Verificar a estrutura do projeto
2. Analisar configurações atuais
3. Revisar padrões de código
4. Verificar dependências
5. Entender o contexto do componente/feature em questão 