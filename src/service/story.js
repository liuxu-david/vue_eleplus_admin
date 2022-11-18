import request from "./index";
export function getStoryList() {
  return request({
    url: "/story/list",
    method: "POST",
  });
}

export function postStory(content) {
  return request({
    url: "/story",
    method: "POST",
    data: {
      title: "刘旭",
      content,
    },
  });
}
