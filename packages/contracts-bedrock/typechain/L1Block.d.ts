/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface L1BlockInterface extends ethers.utils.Interface {
  functions: {
    "DEPOSITOR_ACCOUNT()": FunctionFragment;
    "basefee()": FunctionFragment;
    "hash()": FunctionFragment;
    "number()": FunctionFragment;
    "sequenceNumber()": FunctionFragment;
    "setL1BlockValues(uint64,uint64,uint256,bytes32,uint64)": FunctionFragment;
    "timestamp()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEPOSITOR_ACCOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "basefee", values?: undefined): string;
  encodeFunctionData(functionFragment: "hash", values?: undefined): string;
  encodeFunctionData(functionFragment: "number", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sequenceNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setL1BlockValues",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "timestamp", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "DEPOSITOR_ACCOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "basefee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "number", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sequenceNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setL1BlockValues",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "timestamp", data: BytesLike): Result;

  events: {};
}

export class L1Block extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: L1BlockInterface;

  functions: {
    DEPOSITOR_ACCOUNT(overrides?: CallOverrides): Promise<[string]>;

    basefee(overrides?: CallOverrides): Promise<[BigNumber]>;

    hash(overrides?: CallOverrides): Promise<[string]>;

    number(overrides?: CallOverrides): Promise<[BigNumber]>;

    sequenceNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    setL1BlockValues(
      _number: BigNumberish,
      _timestamp: BigNumberish,
      _basefee: BigNumberish,
      _hash: BytesLike,
      _sequenceNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    timestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  DEPOSITOR_ACCOUNT(overrides?: CallOverrides): Promise<string>;

  basefee(overrides?: CallOverrides): Promise<BigNumber>;

  hash(overrides?: CallOverrides): Promise<string>;

  number(overrides?: CallOverrides): Promise<BigNumber>;

  sequenceNumber(overrides?: CallOverrides): Promise<BigNumber>;

  setL1BlockValues(
    _number: BigNumberish,
    _timestamp: BigNumberish,
    _basefee: BigNumberish,
    _hash: BytesLike,
    _sequenceNumber: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  timestamp(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    DEPOSITOR_ACCOUNT(overrides?: CallOverrides): Promise<string>;

    basefee(overrides?: CallOverrides): Promise<BigNumber>;

    hash(overrides?: CallOverrides): Promise<string>;

    number(overrides?: CallOverrides): Promise<BigNumber>;

    sequenceNumber(overrides?: CallOverrides): Promise<BigNumber>;

    setL1BlockValues(
      _number: BigNumberish,
      _timestamp: BigNumberish,
      _basefee: BigNumberish,
      _hash: BytesLike,
      _sequenceNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    timestamp(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    DEPOSITOR_ACCOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    basefee(overrides?: CallOverrides): Promise<BigNumber>;

    hash(overrides?: CallOverrides): Promise<BigNumber>;

    number(overrides?: CallOverrides): Promise<BigNumber>;

    sequenceNumber(overrides?: CallOverrides): Promise<BigNumber>;

    setL1BlockValues(
      _number: BigNumberish,
      _timestamp: BigNumberish,
      _basefee: BigNumberish,
      _hash: BytesLike,
      _sequenceNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    timestamp(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DEPOSITOR_ACCOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    basefee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    number(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sequenceNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setL1BlockValues(
      _number: BigNumberish,
      _timestamp: BigNumberish,
      _basefee: BigNumberish,
      _hash: BytesLike,
      _sequenceNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    timestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}