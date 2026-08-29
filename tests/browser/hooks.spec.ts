import {test,expect} from "@playwright/test";

// Run before all test cases are executed
test.beforeAll(async()=>{
console.log('-- Before all method ---')
})
test.beforeEach(
    async()=>{
 console.log('-- Before each test is executed ---')       
    }
)

test.afterEach(async()=>{
    console.log('After each test case is executed')
})

test.afterAll(async()=>{
 console.log('After all method is executed')   
})

test('hooks before testing', async ({ page }) => { 

    console.log('First Test')

});

test('hooks after testing', async ({ page }) => { 

    console.log('Second Test')

});