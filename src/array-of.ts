/**
 * TODO: return type  
 * @param n 
 * @param f 
 */
export const arrayOf = <T>(n: number, f: (i: number) => T): T[] => {
  return Array.from(new Array(n), (_, i) => f(i));
}

export default arrayOf;
