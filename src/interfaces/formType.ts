
type TypeInputs = {
 tel: string;
 name?: string | undefined;
 brand: { label?: string | undefined; value?: string | undefined } | null;
 model: { label?: string | undefined; value?: string  | undefined} | null;
 comment?: string | undefined;
};

export type TypeConsultationInputs = {

  name: string;
  tel: string;
  comment?: string | undefined;

}
  
export default TypeInputs;