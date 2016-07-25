import module1 from './module1';
console.log("module1", module1);

System.import('./module2').then(module2 => {
    console.log("module2", module2.default);
});