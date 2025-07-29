//  Nested Function

const globalData = "Global Variable";
const parentFunction = () =>{
    const parentData = "Parent Variable";
    console.log(`Inside parent : parent data = ${parentData} : global data = ${globalData}`);
    return () => {
        const childData = "Child Variable";
    console.log(`Inside child : parent data = ${parentData} : global data = ${globalData} : child data = ${childData}`);
    }
}

// const child = parentFunction();
// child()

parentFunction()();