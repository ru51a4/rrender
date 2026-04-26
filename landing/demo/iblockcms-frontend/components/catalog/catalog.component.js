class component_catalog extends component {
    state = {
        els: []
    };
    init() {
        _store.catalog.subscribe((data) => {
            this.state.els = data?.els.map((c) => {
                return {
                    ...c, img: `` + c.prop["DETAIL_PICTURE"], prop:
                        Object.keys(c.prop)?.map((key) => {
                            return (key !== 'DETAIL_PICTURE' && key !== 'photo') ? `<li>${key} - ${c.prop[key]}${key == 'Цена' && c.prop[key] != 'Не указано' ? 'р.' : ''}</li>` : ""
                        }).join("")
                }
            });
        });
    }
    body() {
        return `
               <div class="d-flex flex-wrap mb-5 col-12">
                <div r-for="els" class="p-2 d-flex col-4"> 
                    <div class="p-2 card d-flex h-100 w-100 justify-content-center align-items-start">
                        <span r-bind="name"></span>
                        <div class="d-flex mx-auto my-3 align-items-center justify-content-center">
                            <img style="" r-bind.src="img">
                            </img>
                        </div>
                        <ul>
                            <div r-bind="prop"></div>
                        </ul>
                    </div>
                </li>
            </div>
            `;
    }
}