import { test, expect } from '@playwright/test';

test('locator', async ({ page }) => {

    let Desktoplinks=page.getByRole('link',{name:'Desktops'})
    let LaptopandNotebooklinks=page.getByRole('link',{name:'Laptops & Notebooks'})
    let componentslink = page.getByRole('link',{name:'Components'})
    let tabletlinks = page.getByRole('link',{name:'Tablets'})
    
});