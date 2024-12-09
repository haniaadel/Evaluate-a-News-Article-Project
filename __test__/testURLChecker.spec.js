/**
 * @jest-environment jsdom
 */

import { checkForURL } from '../src/client/js/urlChecker'

// Mock the DOM element
document.body.innerHTML = `<div id="error"></div>`;

describe('checkForURL', () => {
    beforeEach(() => {
        // Clear the error message before each test
        document.getElementById('error').innerHTML = '';
    });

    test('should not display an error for a valid URL', () => {
        const validURL = 'http://example.com';
        checkForURL(validURL);
        
        expect(document.getElementById('error').innerHTML).toBe('');
        expect(document.getElementById('error').style.cssText).toBe('');
    });

    test('should display an error for an invalid URL', () => {
        const invalidURL = 'invalid-url';
        checkForURL(invalidURL);
        
        expect(document.getElementById('error').innerHTML).toBe('Error: Please input a valid url!');
        expect(document.getElementById('error').style.cssText).toBe("text-align: center; padding: 10px; background-color: rgb(41, 69, 49); color: white;");
    });
});