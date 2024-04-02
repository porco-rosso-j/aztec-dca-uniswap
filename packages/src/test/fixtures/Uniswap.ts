
/* Autogenerated file, do not edit! */

/* eslint-disable */
import {
  AztecAddress,
  AztecAddressLike,
  CompleteAddress,
  Contract,
  ContractArtifact,
  ContractBase,
  ContractFunctionInteraction,
  ContractInstanceWithAddress,
  ContractMethod,
  DeployMethod,
  EthAddress,
  EthAddressLike,
  FieldLike,
  Fr,
  FunctionSelectorLike,
  loadContractArtifact,
  NoirCompiledContract,
  Point,
  PublicKey,
  Wallet,
  WrappedFieldLike,
} from '@aztec/aztec.js';
import UniswapContractArtifactJson from '../../../aztec-contracts/uniswap/target/uniswap_contract-Uniswap.json' assert { type: 'json' };
export const UniswapContractArtifact = loadContractArtifact(UniswapContractArtifactJson as NoirCompiledContract);

/**
 * Type-safe interface for contract Uniswap;
 */
export class UniswapContract extends ContractBase {
  
  private constructor(
    instance: ContractInstanceWithAddress,
    wallet: Wallet,
  ) {
    super(instance, UniswapContractArtifact, wallet);
  }
  

  
  /**
   * Creates a contract instance.
   * @param address - The deployed contract's address.
   * @param wallet - The wallet to use when interacting with the contract.
   * @returns A promise that resolves to a new Contract instance.
   */
  public static async at(
    address: AztecAddress,
    wallet: Wallet,
  ) {
    return Contract.at(address, UniswapContract.artifact, wallet) as Promise<UniswapContract>;
  }

  
  /**
   * Creates a tx to deploy a new instance of this contract.
   */
  public static deploy(wallet: Wallet, ) {
    return new DeployMethod<UniswapContract>(Point.ZERO, wallet, UniswapContractArtifact, UniswapContract.at, Array.from(arguments).slice(1));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified public key to derive the address.
   */
  public static deployWithPublicKey(publicKey: PublicKey, wallet: Wallet, ) {
    return new DeployMethod<UniswapContract>(publicKey, wallet, UniswapContractArtifact, UniswapContract.at, Array.from(arguments).slice(2));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified constructor method.
   */
  public static deployWithOpts<M extends keyof UniswapContract['methods']>(
    opts: { publicKey?: PublicKey; method?: M; wallet: Wallet },
    ...args: Parameters<UniswapContract['methods'][M]>
  ) {
    return new DeployMethod<UniswapContract>(
      opts.publicKey ?? Point.ZERO,
      opts.wallet,
      UniswapContractArtifact,
      UniswapContract.at,
      Array.from(arguments).slice(1),
      opts.method ?? 'constructor',
    );
  }
  

  
  /**
   * Returns this contract's artifact.
   */
  public static get artifact(): ContractArtifact {
    return UniswapContractArtifact;
  }
  

  /** Type-safe wrappers for the public methods exposed by the contract. */
  public methods!: {
    
    /** compute_note_hash_and_nullifier(contract_address: struct, nonce: field, storage_slot: field, note_type_id: field, serialized_note: array) */
    compute_note_hash_and_nullifier: ((contract_address: AztecAddressLike, nonce: FieldLike, storage_slot: FieldLike, note_type_id: FieldLike, serialized_note: FieldLike[]) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** swap_public(sender: struct, input_asset_bridge: struct, input_amount: field, output_asset_bridge: struct, nonce_for_transfer_approval: field, uniswap_fee_tier: field, minimum_output_amount: field, recipient: struct, secret_hash_for_L1_to_l2_message: field, caller_on_L1: struct, nonce_for_swap_approval: field) */
    swap_public: ((sender: AztecAddressLike, input_asset_bridge: AztecAddressLike, input_amount: FieldLike, output_asset_bridge: AztecAddressLike, nonce_for_transfer_approval: FieldLike, uniswap_fee_tier: FieldLike, minimum_output_amount: FieldLike, recipient: AztecAddressLike, secret_hash_for_L1_to_l2_message: FieldLike, caller_on_L1: EthAddressLike, nonce_for_swap_approval: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** spend_public_authwit(inner_hash: field) */
    spend_public_authwit: ((inner_hash: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** nonce_for_burn_approval() */
    nonce_for_burn_approval: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** swap_private(input_asset: struct, input_asset_bridge: struct, input_amount: field, output_asset_bridge: struct, nonce_for_unshield_approval: field, uniswap_fee_tier: field, minimum_output_amount: field, secret_hash_for_redeeming_minted_notes: field, secret_hash_for_L1_to_l2_message: field, caller_on_L1: struct) */
    swap_private: ((input_asset: AztecAddressLike, input_asset_bridge: AztecAddressLike, input_amount: FieldLike, output_asset_bridge: AztecAddressLike, nonce_for_unshield_approval: FieldLike, uniswap_fee_tier: FieldLike, minimum_output_amount: FieldLike, secret_hash_for_redeeming_minted_notes: FieldLike, secret_hash_for_L1_to_l2_message: FieldLike, caller_on_L1: EthAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
  };
}
