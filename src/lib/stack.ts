// Technology stack shown on How we work: [group, [name, logo file in public/icons/tech/]].
// Logo is .svg unless an extension is given. AI first (the lead offer).
// No logo of their own: pgvector uses the PostgreSQL mark (it is a PostgreSQL extension),
// OpenAI Agents SDK the OpenAI mark,
// Claude Agent SDK the Claude mark, AutoGen the Microsoft mark (each maker's own toolkit).
export type Tech = [name: string, logo: string];

export const STACK: [string, Tech[]][] = [
  ["AI models & platforms", [["Claude", "claude"], ["GPT", "openai"], ["Gemini", "gemini"], ["Vertex AI", "vertexai"], ["AWS Bedrock", "bedrock"], ["Azure OpenAI", "azureopenai"], ["Groq", "groq"], ["Ollama", "ollama"], ["Hugging Face", "huggingface"]]],
  ["Agents, automation & LLM tooling", [["LangChain", "langchain"], ["LangGraph", "langgraph"], ["LlamaIndex", "llamaindex"], ["CrewAI", "crewai"], ["OpenAI Agents SDK", "openai"], ["Google ADK", "googleadk.png"], ["Claude Agent SDK", "claude"], ["AutoGen", "autogen"], ["Pydantic AI", "pydantic"], ["DSPy", "dspy.png"], ["MCP", "mcp"], ["n8n", "n8n"], ["LiteLLM", "litellm"], ["agentgateway", "agentgateway"], ["LangSmith", "langsmith"], ["Langfuse", "langfuse"]]],
  ["Languages, frameworks & APIs", [["Python", "python"], ["TypeScript", "typescript"], ["Node.js", "nodejs"], ["Go", "go"], ["Rust", "rust"], ["FastAPI", "fastapi"], ["Django", "django"], ["Flask", "flask"], ["Express.js", "express"], ["React", "react"], ["Next.js", "nextjs"], ["Astro", "astro"], ["Angular", "angular"], ["Tailwind CSS", "tailwindcss"], ["REST APIs", "rest"], ["GraphQL", "graphql"], ["gRPC", "grpc"], ["WebSockets", "websockets"]]],
  ["Databases & vector stores", [["PostgreSQL", "postgresql"], ["MySQL", "mysql"], ["SQLite", "sqlite"], ["MongoDB", "mongodb"], ["Redis", "redis"], ["Neo4j", "neo4j"], ["FalkorDB", "falkordb"], ["pgvector", "postgresql"], ["ChromaDB", "chroma.png"], ["Pinecone", "pinecone.png"], ["Qdrant", "qdrant.png"], ["Weaviate", "weaviate.png"]]],
  ["Cloud", [["AWS", "aws"], ["Google Cloud", "googlecloud"], ["Azure", "azure"], ["Cloudflare", "cloudflare"], ["DigitalOcean", "digitalocean"]]],
  ["DevOps & observability", [["Docker", "docker"], ["Kubernetes", "kubernetes"], ["Terraform", "terraform"], ["GitHub Actions", "githubactions"], ["Grafana", "grafana"], ["Prometheus", "prometheus"]]],
];

export const logoSrc = (logo: string) => `/icons/tech/${logo.includes(".") ? logo : `${logo}.svg`}`;
