// Technology stack shown on How we work: [group, [name, logo file in public/icons/tech/]].
// Logo is .svg unless an extension is given. AI first (the lead offer). Only tools we ship
// with and clients recognise; plumbing and close overlaps are left out.
// No logo of their own: pgvector uses the PostgreSQL mark (it is a PostgreSQL extension),
// OpenAI Agents SDK the OpenAI mark, Claude Agent SDK the Claude mark.
export type Tech = [name: string, logo: string];

export const STACK: [string, Tech[]][] = [
  ["AI models & platforms", [["Claude", "claude"], ["GPT", "openai"], ["Gemini", "gemini"], ["AWS Bedrock", "bedrock"], ["Azure OpenAI", "azureopenai"], ["Hugging Face", "huggingface"]]],
  ["Agents, automation & LLM tooling", [["LangChain", "langchain"], ["LangGraph", "langgraph"], ["LlamaIndex", "llamaindex"], ["CrewAI", "crewai"], ["OpenAI Agents SDK", "openai"], ["Claude Agent SDK", "claude"], ["MCP", "mcp"], ["n8n", "n8n"], ["LangSmith", "langsmith"]]],
  ["Languages, frameworks & APIs", [["Python", "python"], ["TypeScript", "typescript"], ["Node.js", "nodejs"], ["Go", "go"], ["FastAPI", "fastapi"], ["Django", "django"], ["React", "react"], ["Next.js", "nextjs"], ["Angular", "angular"], ["REST APIs", "rest"], ["GraphQL", "graphql"]]],
  ["Databases & vector stores", [["PostgreSQL", "postgresql"], ["MySQL", "mysql"], ["MongoDB", "mongodb"], ["Redis", "redis"], ["Neo4j", "neo4j"], ["pgvector", "postgresql"], ["Qdrant", "qdrant.png"]]],
  ["Cloud", [["AWS", "aws"], ["Google Cloud", "googlecloud"], ["Azure", "azure"]]],
  ["DevOps & observability", [["Docker", "docker"], ["Kubernetes", "kubernetes"], ["GitHub Actions", "githubactions"]]],
];

export const logoSrc = (logo: string) => `/icons/tech/${logo.includes(".") ? logo : `${logo}.svg`}`;
