import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
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
} from "../generated/Contract/Contract"

export function createDepositEvent(
  user: Address,
  poolIndex: BigInt,
  token: Address,
  amount: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "poolIndex",
      ethereum.Value.fromUnsignedBigInt(poolIndex)
    )
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositEvent
}

export function createHarvestEvent(
  user: Address,
  poolIndex: BigInt,
  token: Address,
  amount: BigInt
): Harvest {
  let harvestEvent = changetype<Harvest>(newMockEvent())

  harvestEvent.parameters = new Array()

  harvestEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  harvestEvent.parameters.push(
    new ethereum.EventParam(
      "poolIndex",
      ethereum.Value.fromUnsignedBigInt(poolIndex)
    )
  )
  harvestEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  harvestEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return harvestEvent
}

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createPendingWithdrawEvent(
  user: Address,
  poolIndex: BigInt,
  accumAmount: BigInt
): PendingWithdraw {
  let pendingWithdrawEvent = changetype<PendingWithdraw>(newMockEvent())

  pendingWithdrawEvent.parameters = new Array()

  pendingWithdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  pendingWithdrawEvent.parameters.push(
    new ethereum.EventParam(
      "poolIndex",
      ethereum.Value.fromUnsignedBigInt(poolIndex)
    )
  )
  pendingWithdrawEvent.parameters.push(
    new ethereum.EventParam(
      "accumAmount",
      ethereum.Value.fromUnsignedBigInt(accumAmount)
    )
  )

  return pendingWithdrawEvent
}

export function createPoolAddedEvent(
  token: Address,
  lockPeriod: BigInt,
  poolIndex: BigInt
): PoolAdded {
  let poolAddedEvent = changetype<PoolAdded>(newMockEvent())

  poolAddedEvent.parameters = new Array()

  poolAddedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  poolAddedEvent.parameters.push(
    new ethereum.EventParam(
      "lockPeriod",
      ethereum.Value.fromUnsignedBigInt(lockPeriod)
    )
  )
  poolAddedEvent.parameters.push(
    new ethereum.EventParam(
      "poolIndex",
      ethereum.Value.fromUnsignedBigInt(poolIndex)
    )
  )

  return poolAddedEvent
}

export function createPoolChangeStateEvent(
  poolIndex: BigInt,
  state: boolean
): PoolChangeState {
  let poolChangeStateEvent = changetype<PoolChangeState>(newMockEvent())

  poolChangeStateEvent.parameters = new Array()

  poolChangeStateEvent.parameters.push(
    new ethereum.EventParam(
      "poolIndex",
      ethereum.Value.fromUnsignedBigInt(poolIndex)
    )
  )
  poolChangeStateEvent.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromBoolean(state))
  )

  return poolChangeStateEvent
}

export function createPoolChangedEvent(poolIndex: BigInt): PoolChanged {
  let poolChangedEvent = changetype<PoolChanged>(newMockEvent())

  poolChangedEvent.parameters = new Array()

  poolChangedEvent.parameters.push(
    new ethereum.EventParam(
      "poolIndex",
      ethereum.Value.fromUnsignedBigInt(poolIndex)
    )
  )

  return poolChangedEvent
}

export function createTokenWithdrawEvent(
  token: Address,
  amount: BigInt,
  to: Address
): TokenWithdraw {
  let tokenWithdrawEvent = changetype<TokenWithdraw>(newMockEvent())

  tokenWithdrawEvent.parameters = new Array()

  tokenWithdrawEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokenWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  tokenWithdrawEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return tokenWithdrawEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createWithdrawEvent(
  user: Address,
  poolIndex: BigInt,
  token: Address,
  amount: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "poolIndex",
      ethereum.Value.fromUnsignedBigInt(poolIndex)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawEvent
}
