//indexable type is {[key]:value}

//ex1)
export const indexable = (key: any, value: any) => ({ [key]: value });

//ex2)
type Indexable = {
  [key: string]: string;
};

export const _indexable = (key: string, value: string): Indexable => ({
  [key]: value,
});
