export type Category = {
  name: string;
};

export type Photo = {
  id: string;
  formats: {
    full: string;
    md: string;
  };
};
