const State = {
  審査中: '審査中',
  承認済: '承認済',
  実施中: '実施中',
  終了: '終了',
  差し戻し中: '差し戻し中',
  中断中: '中断中',
} as const
type State = typeof State[keyof typeof State]

export { State }
