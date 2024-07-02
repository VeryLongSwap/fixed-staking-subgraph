import { BigInt } from "@graphprotocol/graph-ts"
import {
  Deposit as DepositEvent,
  Harvest as HarvestEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  PendingWithdraw as PendingWithdrawEvent,
  PoolAdded as PoolAddedEvent,
  PoolChangeState as PoolChangeStateEvent,
  PoolChanged as PoolChangedEvent,
  TokenWithdraw as TokenWithdrawEvent,
  Unpaused as UnpausedEvent,
  Withdraw as WithdrawEvent
} from "../generated/Contract/Contract"
import {
  UserDepositState,
  Deposit,
  Harvest,
  Initialized,
  OwnershipTransferred,
  Paused,
  PendingWithdraw,
  PoolAdded,
  PoolChangeState,
  PoolChanged,
  TokenWithdraw,
  Unpaused,
  Withdraw
} from "../generated/schema"

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.user = event.params.user
  entity.poolIndex = event.params.poolIndex
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.logIndex = event.logIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  let state = UserDepositState.load(`${event.params.user.toHexString()}#${event.params.poolIndex}`)
  if (state == null) {
    state = new UserDepositState(`${event.params.user.toHexString()}#${event.params.poolIndex}`)
    state.amount = BigInt.fromI32(0);
  }
  
  state.address = event.params.user
  state.amount = state.amount.plus(event.params.amount)
  state.poolIndex = event.params.poolIndex

  entity.save()
  state.save()
}

export function handleHarvest(event: HarvestEvent): void {
  let entity = new Harvest(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.poolIndex = event.params.poolIndex
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.logIndex = event.logIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePendingWithdraw(event: PendingWithdrawEvent): void {
  let entity = new PendingWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.poolIndex = event.params.poolIndex
  entity.accumAmount = event.params.accumAmount

  entity.logIndex = event.logIndex
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  let state = UserDepositState.load(`${event.params.user.toHexString()}#${event.params.poolIndex}`)
  if (state == null) {
    state = new UserDepositState(`${event.params.user.toHexString()}#${event.params.poolIndex}`)
    state.amount = BigInt.fromI32(0);
  }
  
  state.address = event.params.user
  state.amount = state.amount.minus(event.params.accumAmount)
  state.poolIndex = event.params.poolIndex

  entity.save()
  state.save()
  
}

export function handlePoolAdded(event: PoolAddedEvent): void {
  let entity = new PoolAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.lockPeriod = event.params.lockPeriod
  entity.poolIndex = event.params.poolIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePoolChangeState(event: PoolChangeStateEvent): void {
  let entity = new PoolChangeState(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolIndex = event.params.poolIndex
  entity.state = event.params.state

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePoolChanged(event: PoolChangedEvent): void {
  let entity = new PoolChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolIndex = event.params.poolIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenWithdraw(event: TokenWithdrawEvent): void {
  let entity = new TokenWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.poolIndex = event.params.poolIndex
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.logIndex = event.logIndex
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  let state = UserDepositState.load(`${event.params.user.toHexString()}#${event.params.poolIndex}`)
  if (state == null) {
    state = new UserDepositState(`${event.params.user.toHexString()}#${event.params.poolIndex}`)
    state.amount = BigInt.fromI32(0);
  }
  
  state.address = event.params.user
  state.amount = state.amount.minus(event.params.amount)
  state.poolIndex = event.params.poolIndex

  entity.save()
  state.save()

}
