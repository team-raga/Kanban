import { newtClient } from '@lib/newt'
import type { Article } from '@lib/newt'

// スラッグから記事詳細を取得
export async function getArticleBySlug(
  appUid: string,
  modelUid: string,
  slug: string
) {
  const item = await newtClient.getFirstContent<Article>({
    appUid: appUid,
    modelUid: modelUid,
    query: {
      slug,
    },
  })
  return item
}