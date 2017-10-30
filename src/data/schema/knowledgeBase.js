export const types = `
  type KnowledgeBaseArticle {
    _id: String
    title: String
    summary: String
    content: String
    status: String
    createdBy: String
    createdDate: Date
    modifiedBy: String
    modifiedDate: Date
  }

  input KnowledgeBaseArticleDoc {
    title: String!
    summary: String
    content: String
    status: String
  }

  type KnowledgeBaseCategory {
    _id: String
    title: String
    description: String
    articles: [KnowledgeBaseArticle]
    icon: String
    createdBy: String
    createdDate: Date
    modifiedBy: String
    modifiedDate: Date
  }

  input KnowledgeBaseCategoryDoc {
    title: String!
    description: String
    articles: [KnowledgeBaseArticle]
    icon: String
  }

  type KnowledgeBaseTopic {
    _id: String
    title: String
    description: String
    categories: [KnowledgeBaseCategory]
    brand: Brand
    createdBy: String
    createdDate: Date
    modifiedBy: String
    modifiedDate: Date
  }

  input KnowledgeBaseTopicDoc {
    title: String!
    description: String
    categoryIds: [String]
    brandId: String!
  }
`;

export const queries = `
  knowledgeBaseTopics(limit: Int): [KnowledgeBaseTopic]
  knowledgeBaseTopicsDetail(_id: String!): KnowledgeBaseTopic
  knowledgeBaseTopicsTotalCount: Int

  knowledgeBaseCategories(limit: Int): [KnowledgeBaseCategory]
  knowledgeBaseCategoriesDetail(_id: String!): KnowledgeBaseCategory
  knowledgeBaseCategoriesTotalCount: Int

  knowledgeBaseArticles(limit: Int): [KnowledgeBaseArticle]
  knowledgeBaseArticlesDetail(_id: String!): KnowledgeBaseArticle
  knowledgeBaseArticlesTotalCount: Int
`;

export const mutations = `
  knowledgeBaseTopicsAdd(topicAdd: KnowledgeBaseTopicDoc): KnowledgeBaseTopic
  knowledgeBaseTopicsEdit(_id: String!): Boolean
  knowledgeBaseTopicsRemove(_id: String!): Boolean

  knowledgeBaseCategoriesAdd(categoryDoc: KnowledgeBaseCategoryDoc): KnowledgeBaseTopic
  knowledgeBaseCategoriesEdit(_id: String!): Boolean
  knowledgeBaseCategoriesRemove(_id: String!): Boolean

  knowledgeBaseArticlesAdd(articleDoc: KnowledgeBaseArticleDoc): KnowledgeBaseArticle
  knowledgeBaseArticlesEdit(_id: String!): Boolean
  knowledgeBaseArticlesRemove(_id: String!): Boolean
`;
