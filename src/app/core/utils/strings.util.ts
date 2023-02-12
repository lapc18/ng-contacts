

export const validateEmail = (email:string):RegExpMatchArray | null => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};


export const getUsernameFromEmail = (email:string):string | null => {
  return email.split('@') && email.split('@').length > 0 ? email.split('@')[0] : null;
}


