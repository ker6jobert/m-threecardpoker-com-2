const contentMap = [
  {
    section: "game-rules",
    title: "炸金花游戏规则",
    tags: ["炸金花", "牌型", "豹子", "同花顺", "金花", "顺子"],
    url: "https://m-threecardpoker.com/rules",
    keywords: "炸金花游戏玩法与牌型大小解析"
  },
  {
    section: "strategy",
    title: "炸金花策略技巧",
    tags: ["炸金花", "下注", "心理战", "概率", "诈唬"],
    url: "https://m-threecardpoker.com/strategy",
    keywords: "炸金花游戏高级策略与胜率提升"
  },
  {
    section: "variants",
    title: "炸金花变种玩法",
    tags: ["炸金花", "闷牌", "比牌", "弃牌", "加注"],
    url: "https://m-threecardpoker.com/variants",
    keywords: "炸金花游戏不同变种与规则差异"
  },
  {
    section: "blog",
    title: "炸金花资讯与故事",
    tags: ["炸金花", "赛事", "历史", "文化"],
    url: "https://m-threecardpoker.com/blog",
    keywords: "炸金花游戏相关文章与社区动态"
  }
];

function searchContent(query, source = contentMap) {
  if (!query || typeof query !== "string") return [];
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  return source.filter(item => {
    const matchFields = [item.title, item.keywords, ...item.tags].join(" ").toLowerCase();
    return terms.every(term => matchFields.includes(term));
  });
}

function getSectionByTag(tag, source = contentMap) {
  if (!tag) return [];
  const lowerTag = tag.toLowerCase();
  return source.filter(item =>
    item.tags.some(t => t.toLowerCase() === lowerTag)
  );
}

function getSectionByTitle(title, source = contentMap) {
  if (!title) return null;
  return source.find(item => item.title === title) || null;
}

function listAllTags(source = contentMap) {
  const tagSet = new Set();
  source.forEach(item => item.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

function contentMapReport(source = contentMap) {
  return source.map(item => ({
    title: item.title,
    tagCount: item.tags.length,
    url: item.url
  }));
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    contentMap,
    searchContent,
    getSectionByTag,
    getSectionByTitle,
    listAllTags,
    contentMapReport
  };
}