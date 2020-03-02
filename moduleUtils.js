const last='Thorat';
const middle="Kiran";
export function returnHi(name)
{
    return `Hi ${name} ${last}`;
}
const first='shital';
//named export
export {last,middle};
export default first;