/**
 * @jest-environment jsdom
 */

import { updateUI } from '../src/client/js/formHandler'

// Mock the DOM element
document.body.innerHTML = `
<div id="lang"></div>
<div id="topic"></div>
<div id="sentence"></div>
`;


describe('updateUI', () => {
    test('should update the UI elements with the correct data', async () => {
        const mockData = { data: { response: { language: 'English', sentences: [{ words: [{ token: 'Hello' }] }], topics: [{ score: 1, label: 'Greeting' }] } } };
        
        await updateUI(mockData);
        
        expect(document.getElementById('lang').innerHTML).toBe(`Language: English`);
        expect(document.getElementById('topic').innerHTML).toBe(`Topic: Greeting`);
    });
});
