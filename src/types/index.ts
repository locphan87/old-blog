import React from 'react'

export interface Experiences {
  title: string
  company: string
  role: string
  tech: string
}
export enum SkillLevel {
  BEGINNER,
  AVERAGE,
  SKILLED,
  SPECIALIST,
  EXPERT,
}
export enum Tech {
  VIM,
  TMUX,
  VSCODE,
  SUBLIME,
  ZEPLIN,
  UML,
  LINUX,
  MACOS,
  WINDOWS,
  GITHUB,
  GITLAB,
  BITBUCKET,
  JEST,
  ENZYME,
  TEST_CAFE,
  TESTING_LIBRARY,
  CYPRESS,
  CODE_COV,
  MOCHA,
  CHAI,
  SINON,
  AVA,
  DOCKER,
  JENKINS,
  KONG,
  AWS,
  HEROKU,
  AZURE,
  BASH,
  SPLUNK,
  JIRA,
  CONFLUENCE,
  TRELLO,
  REDMINE,
  RALLY,
  AGILE,
  SCRUM,
  KANBAN,
  MYSQL,
  POSTGRES,
  MONGO,
  ORACLE,
  REDIS,
  DB2,
  NODE,
  CLOJURE,
  ELIXIR,
  EXPRESS,
  HAPI,
  LOOPBACK,
  KOA,
  METEOR,
  SAILS,
  STRAPI,
  KEYSTONE,
  REST,
  MICRO_SERVICES,
  GRAPHQL,
  APOLLO_SERVER,
  GRAPHCOOL,
  HASURA,
  HTML,
  CSS,
  JS,
  COFFEE,
  FLOW,
  TS,
  CLOJURE_SCRIPT,
  ELM,
  FUNCTIONAL_JS,
  RAMDA,
  REACT,
  REACT_NATIVE,
  REDUX,
  ANGULAR,
  GATSBY,
  NEXT,
  SVELTE,
  BOOTSTRAP,
  FOUNDATION,
  RWD,
  SASS,
  LESS,
  STYLUS,
  CSS_IN_JS,
  EMOTION,
  STYLED_COMPONENTS,
  GLAMOROUS_NATIVE,
  TAILWIND,
  AXIOS,
  APOLLO_CLIENT,
  WEBPACK,
  GULP,
  GRUNT,
  ESLINT,
  PRETTIER,
  GIT_HOOKS,
}
export type Links = {
  [tech in Tech]: string
}
export enum Level {
  BEGINNER = 20,
  AVERAGE = 40,
  SKILLED = 60,
  SPECIALIST = 80,
  EXPERT = 100,
}
export enum SkillColor {
  BEGINNER = '#00D8FF',
  AVERAGE = '#8AB3A2',
  SKILLED = '#6CC24A',
  // SPECIALIST = '#19CD05',
  SPECIALIST = 'orange',
  EXPERT = '#187DDA',
}
export enum SkillCategory {
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  DATABASE = 'Database',
  TESTING = 'Testing',
  DEVOPS = 'DevOps',
  DEV_TOOLS = 'Dev Tools',
  PROJECT_MANAGEMENT = 'Project Management',
  VERSION_CONTROL = 'Version Control',
  OS = 'OS',
  EDITOR = 'Editor',
  DESIGN = 'Design',
}
export interface Skill {
  id: Tech
  name: string
  color?: string
  bg?: string
  level: Level
  category: SkillCategory
  component?: React.FC
  avatar?: string
}
