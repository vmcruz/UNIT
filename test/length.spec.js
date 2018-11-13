describe('UnitJS.length', () => {
    beforeAll(() => {
        UnitJS.install('$');
        document.body.innerHTML = `
            <div class="test-div"></div>
            <div id="test-id-div">
                <ul id="test-ul">
                    <li class="test-li">Test item 1</li>
                    <li>Test item 2</li>
                    <li class="test-li">Test item 3</li>
                    <li class="test-li">Test item 4</li>
                </ul>
            </div>
            <div class="test-div"></div>
            <div class="test-div"></div>
        `;
    });

    it('should return 0 if no elements were selected', () => {
        expect($().length).toEqual(0);
    });

    it('should return the correct number of elements', () => {
        expect($('div').length).toEqual(4);
    });

    it('should return the correct number of elements for multiple selectors', () => {
        expect($('div', '#test-ul li').length).toEqual(8);
    });
});