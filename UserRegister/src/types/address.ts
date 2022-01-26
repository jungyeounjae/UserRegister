/**
 * 住所定義タイプ
 * */
export type Address = {
  zip: string;
  address1: string;
  address2: string | '';
};

// daumから取得した住所のproperties
export type DaumAddress = {
  address: string;
  autoJibunAddress: string;
  roadAddress: string;
  sigunguCode: string;  
}
