// Skills data. Each item: [name, devicon path (optional), "light" if the icon is dark and needs a light tile (optional)]
// Items are listed alphabetically inside each group. Keep it that way when you add new ones.
const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/";

window.SKILLS = [
  { key: "skLang", items: [
    ["C", "c/c-original"],
    ["C++", "cplusplus/cplusplus-original"],
    ["Java", "java/java-original"],
    ["JavaScript", "javascript/javascript-original"],
    ["Python", "python/python-original"],
    ["TypeScript", "typescript/typescript-original"]
  ]},
  { key: "skBackend", items: [
    ["Apigee API Management"],
    ["Cron jobs"],
    ["Django", "django/django-plain", "light"],
    ["Kafka", "apachekafka/apachekafka-original", "light"],
    ["Microservices"],
    ["Spring Boot", "spring/spring-original"],
    ["Spring Framework", "spring/spring-original"]
  ]},
  { key: "skFront", items: [
    ["Mobile Application Development"],
    ["React Native", "react/react-original"],
    ["React.js", "react/react-original"]
  ]},
  { key: "skData", items: [
    ["Cassandra", "cassandra/cassandra-original"],
    ["Elasticsearch", "elasticsearch/elasticsearch-original"],
    ["Oracle SQL Developer", "oracle/oracle-original"],
    ["PostgreSQL", "postgresql/postgresql-original"]
  ]},
  { key: "skDevops", items: [
    ["Argo", "argocd/argocd-original"],
    ["DevOps"],
    ["Kubernetes", "kubernetes/kubernetes-plain"]
  ]},
  { key: "skTest", items: [
    ["E2E Testing"],
    ["Integration Testing"],
    ["Jest / Vitest", "jest/jest-plain"],
    ["OWASP Top 10 (Java)"],
    ["React Testing Library"],
    ["Test-Driven Development"],
    ["Unit Testing"]
  ]},
  { key: "skGame", items: [
    ["Digital Games"],
    ["Unreal Editor"],
    ["Unreal Engine 4/5", "unrealengine/unrealengine-original", "light"]
  ]},
  { key: "skPractice", items: [
    ["Clean Code"],
    ["Figma", "figma/figma-original"],
    ["OOP"],
    ["Postman", "postman/postman-original"],
    ["Scaled Agile Framework"]
  ]}
];