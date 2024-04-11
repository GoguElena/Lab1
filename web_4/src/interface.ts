// @ts-ignore
interface FirstInterface {
    field1: string;
    field2: number;
    field3: string;
    field4: string;
    field5: string;
}
interface SecondInterface extends FirstInterface {
    additionalField1: string;
    additionalField2: string;
}
