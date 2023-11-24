
type TypeInputs = {
 tel: string;
 name: string;
 brand: { label?: string | undefined; value?: string | undefined } | null;
 model: { label?: string | undefined; value?: string | undefined } | null;
 area: { label: string ; value: string };
 comment?: string | undefined;
};

export type TypeConsultationInputs = {

  name: string;
  tel: string;
  comment?: string | undefined;

}

export type TypeOrderPost = TypeInputs & { type: string }

export type TypeConsultationPost = TypeConsultationInputs & { type: string}
 
  
export default TypeInputs;