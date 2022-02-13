import { State } from './state'

export class StateTransitions {
  allowed: Map<State, Set<State>> = new Map([
    [State.審査中, new Set<State>([State.承認済, State.差し戻し中])],
    [State.差し戻し中, new Set<State>([State.審査中, State.終了])],
    [State.承認済, new Set<State>([State.実施中, State.終了])],
    [State.実施中, new Set<State>([State.中断中, State.終了])],
    [State.中断中, new Set<State>([State.実施中, State.終了])]
  ])

  canTransit = (from: State, to: State): boolean => {
    const allowedStates: Set<State> | undefined = this.allowed.get(from)
    return !!allowedStates && allowedStates.has(to)
  }
}
