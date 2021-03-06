import "@testing-library/jest-dom/extend-expect";
import React from "react";
import {render, waitFor, getByTestId, getByText} from "@testing-library/react";
import App from "./App";
import userEvent, {specialChars} from "@testing-library/user-event";

const ensureFirstDataRendered = (container) => {
    return new Promise(function (resolve) {
        (function waitForFirstDataRendered() {
            if (getByTestId(container, "dataRendered").innerHTML !== "") {
                return resolve();
            }
            setTimeout(waitForFirstDataRendered, 10);
        })();
    });
};

test("AG Grid rendered as expected", async () => {
    const {container} = render(<App/>);
    await waitFor(() => ensureFirstDataRendered(container));
    expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="ag-theme-alpine"
        style="height: 400px; width: 600px;"
      >
        <p
          data-testid="dataRendered"
          style="position: absolute; left: -999px;"
        >
          Data rendered to the grid
        </p>
        <div
          style="height: 100%;"
        >
          <div
            class="ag-root-wrapper ag-layout-normal ag-ltr"
            ref="eRootWrapper"
          >
            
                    
                    
            <div
              class="ag-root-wrapper-body ag-layout-normal ag-focus-managed"
              ref="rootWrapperBody"
            >
              <div
                class="ag-tab-guard ag-tab-guard-top"
                role="presentation"
                tabindex="0"
              />
              
                        
              <!--AG-GRID-BODY-->
              <div
                aria-colcount="3"
                aria-rowcount="4"
                class="ag-root ag-unselectable ag-layout-normal"
                ref="gridBody"
                role="grid"
                unselectable="on"
              >
                
            
                <!--AG-HEADER-ROOT-->
                <div
                  class="ag-header ag-focus-managed ag-pivot-off"
                  ref="headerRoot"
                  role="presentation"
                  style="height: 49px; min-height: 49px;"
                  unselectable="on"
                >
                  
                
                  <div
                    class="ag-pinned-left-header ag-hidden"
                    ref="ePinnedLeftHeader"
                    role="presentation"
                    style="width: 0px; max-width: 0px; min-width: 0px;"
                  >
                    <div
                      aria-rowindex="1"
                      class="ag-header-row ag-header-row-column"
                      role="row"
                      style="top: 0px; height: 48px; width: 0px;"
                    />
                  </div>
                  
                
                  <div
                    class="ag-header-viewport"
                    ref="eHeaderViewport"
                    role="presentation"
                  >
                    
                    
                    <div
                      class="ag-header-container"
                      ref="eHeaderContainer"
                      role="rowgroup"
                      style="width: 600px;"
                    >
                      <div
                        aria-rowindex="1"
                        class="ag-header-row ag-header-row-column"
                        role="row"
                        style="top: 0px; height: 48px; width: 600px;"
                      >
                        <div
                          aria-colindex="1"
                          class="ag-header-cell ag-focus-managed"
                          col-id="make"
                          role="columnheader"
                          style="width: 200px; left: 0px;"
                          tabindex="-1"
                          unselectable="on"
                        >
                          
                
                          <div
                            class="ag-header-cell-resize ag-hidden"
                            ref="eResize"
                            role="presentation"
                          />
                          
                
                          <!--AG-CHECKBOX-->
                          <div
                            class="ag-header-select-all ag-labeled ag-label-align-right ag-checkbox ag-input-field ag-hidden"
                            ref="cbSelectAll"
                            role="presentation"
                          >
                            
                    
                            <div
                              class="ag-input-field-label ag-label ag-hidden ag-checkbox-label"
                              ref="eLabel"
                              role="presentation"
                            />
                            
                    
                            <div
                              class="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper"
                              ref="eWrapper"
                              role="presentation"
                            >
                              
                        
                              <input
                                aria-label="Press Space to toggle all rows selection (unchecked)"
                                class="ag-input-field-input ag-checkbox-input"
                                id="ag-22-input"
                                ref="eInput"
                                tabindex="-1"
                                type="checkbox"
                              />
                              
                    
                            </div>
                            
                
                          </div>
                          
            
                          <div
                            class="ag-cell-label-container"
                            role="presentation"
                          >
                            
                
                            
                
                            <div
                              class="ag-header-cell-label"
                              ref="eLabel"
                              role="presentation"
                              unselectable="on"
                            >
                              
                    
                              <span
                                class="ag-header-cell-text"
                                ref="eText"
                                unselectable="on"
                              >
                                Make
                              </span>
                              
                    
                              <span
                                aria-hidden="true"
                                class="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden"
                                ref="eFilter"
                              >
                                <span
                                  class="ag-icon ag-icon-filter"
                                  role="presentation"
                                  unselectable="on"
                                />
                              </span>
                              
                    
                              
                    
                              
                    
                              
                    
                              
                
                            </div>
                            
            
                          </div>
                        </div>
                        <div
                          aria-colindex="2"
                          class="ag-header-cell ag-focus-managed"
                          col-id="model"
                          role="columnheader"
                          style="width: 200px; left: 200px;"
                          tabindex="-1"
                          unselectable="on"
                        >
                          
                
                          <div
                            class="ag-header-cell-resize ag-hidden"
                            ref="eResize"
                            role="presentation"
                          />
                          
                
                          <!--AG-CHECKBOX-->
                          <div
                            class="ag-header-select-all ag-labeled ag-label-align-right ag-checkbox ag-input-field ag-hidden"
                            ref="cbSelectAll"
                            role="presentation"
                          >
                            
                    
                            <div
                              class="ag-input-field-label ag-label ag-hidden ag-checkbox-label"
                              ref="eLabel"
                              role="presentation"
                            />
                            
                    
                            <div
                              class="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper"
                              ref="eWrapper"
                              role="presentation"
                            >
                              
                        
                              <input
                                aria-label="Press Space to toggle all rows selection (unchecked)"
                                class="ag-input-field-input ag-checkbox-input"
                                id="ag-25-input"
                                ref="eInput"
                                tabindex="-1"
                                type="checkbox"
                              />
                              
                    
                            </div>
                            
                
                          </div>
                          
            
                          <div
                            class="ag-cell-label-container"
                            role="presentation"
                          >
                            
                
                            
                
                            <div
                              class="ag-header-cell-label"
                              ref="eLabel"
                              role="presentation"
                              unselectable="on"
                            >
                              
                    
                              <span
                                class="ag-header-cell-text"
                                ref="eText"
                                unselectable="on"
                              >
                                Model
                              </span>
                              
                    
                              <span
                                aria-hidden="true"
                                class="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden"
                                ref="eFilter"
                              >
                                <span
                                  class="ag-icon ag-icon-filter"
                                  role="presentation"
                                  unselectable="on"
                                />
                              </span>
                              
                    
                              
                    
                              
                    
                              
                    
                              
                
                            </div>
                            
            
                          </div>
                        </div>
                        <div
                          aria-colindex="3"
                          class="ag-header-cell ag-focus-managed"
                          col-id="price"
                          role="columnheader"
                          style="width: 200px; left: 400px;"
                          tabindex="-1"
                          unselectable="on"
                        >
                          
                
                          <div
                            class="ag-header-cell-resize ag-hidden"
                            ref="eResize"
                            role="presentation"
                          />
                          
                
                          <!--AG-CHECKBOX-->
                          <div
                            class="ag-header-select-all ag-labeled ag-label-align-right ag-checkbox ag-input-field ag-hidden"
                            ref="cbSelectAll"
                            role="presentation"
                          >
                            
                    
                            <div
                              class="ag-input-field-label ag-label ag-hidden ag-checkbox-label"
                              ref="eLabel"
                              role="presentation"
                            />
                            
                    
                            <div
                              class="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper"
                              ref="eWrapper"
                              role="presentation"
                            >
                              
                        
                              <input
                                aria-label="Press Space to toggle all rows selection (unchecked)"
                                class="ag-input-field-input ag-checkbox-input"
                                id="ag-28-input"
                                ref="eInput"
                                tabindex="-1"
                                type="checkbox"
                              />
                              
                    
                            </div>
                            
                
                          </div>
                          
            
                          <div
                            class="ag-cell-label-container"
                            role="presentation"
                          >
                            
                
                            
                
                            <div
                              class="ag-header-cell-label"
                              ref="eLabel"
                              role="presentation"
                              unselectable="on"
                            >
                              
                    
                              <span
                                class="ag-header-cell-text"
                                ref="eText"
                                unselectable="on"
                              >
                                Price
                              </span>
                              
                    
                              <span
                                aria-hidden="true"
                                class="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden"
                                ref="eFilter"
                              >
                                <span
                                  class="ag-icon ag-icon-filter"
                                  role="presentation"
                                  unselectable="on"
                                />
                              </span>
                              
                    
                              
                    
                              
                    
                              
                    
                              
                
                            </div>
                            
            
                          </div>
                        </div>
                      </div>
                    </div>
                    
                
                  </div>
                  
                
                  <div
                    class="ag-pinned-right-header ag-hidden"
                    ref="ePinnedRightHeader"
                    role="presentation"
                    style="width: 0px; max-width: 0px; min-width: 0px;"
                  >
                    <div
                      aria-rowindex="1"
                      class="ag-header-row ag-header-row-column"
                      role="row"
                      style="top: 0px; height: 48px; width: 0px;"
                    />
                  </div>
                  
            
                </div>
                
            
                <div
                  class="ag-floating-top"
                  ref="eTop"
                  role="presentation"
                  style="min-height: 0px; height: 0px; display: none; overflow-y: hidden;"
                  unselectable="on"
                >
                  
                
                  <!--AG-ROW-CONTAINER-->
                  <div
                    class="ag-pinned-left-floating-top ag-hidden"
                    name="topLeft"
                    ref="topLeftContainer"
                    role="presentation"
                    unselectable="on"
                  />
                  
                
                  <!--AG-ROW-CONTAINER-->
                  <div
                    class="ag-floating-top-viewport"
                    name="topCenter"
                    ref="topCenterContainer"
                    role="presentation"
                    unselectable="on"
                  >
                    
                    
                    <div
                      class="ag-floating-top-container"
                      ref="eContainer"
                      role="presentation"
                      style="width: 600px;"
                      unselectable="on"
                    />
                    
                
                  </div>
                  
                
                  <!--AG-ROW-CONTAINER-->
                  <div
                    class="ag-pinned-right-floating-top ag-hidden"
                    name="topRight"
                    ref="topRightContainer"
                    role="presentation"
                    unselectable="on"
                  />
                  
                
                  <!--AG-ROW-CONTAINER-->
                  <div
                    class="ag-floating-top-full-width-container"
                    name="topFullWidth"
                    ref="topFullWidthContainer"
                    role="presentation"
                    unselectable="on"
                  />
                  
            
                </div>
                
            
                <div
                  class="ag-body-viewport ag-layout-normal ag-row-no-animation"
                  ref="eBodyViewport"
                  role="presentation"
                >
                  
                
                  <!--AG-ROW-CONTAINER-->
                  <div
                    class="ag-pinned-left-cols-container ag-hidden"
                    name="left"
                    ref="leftContainer"
                    role="presentation"
                    style="height: 126px;"
                    unselectable="on"
                  >
                    <div
                      aria-label="Press SPACE to select this row."
                      aria-rowindex="2"
                      class="ag-row ag-row-no-focus ag-row-even ag-row-level-0 ag-row-position-absolute ag-row-first"
                      comp-id="30"
                      role="row"
                      row-id="0"
                      row-index="0"
                      style="height: 42px; transform: translateY(0px); "
                    />
                    <div
                      aria-label="Press SPACE to select this row."
                      aria-rowindex="3"
                      class="ag-row ag-row-no-focus ag-row-odd ag-row-level-0 ag-row-position-absolute"
                      comp-id="31"
                      role="row"
                      row-id="1"
                      row-index="1"
                      style="height: 42px; transform: translateY(42px); "
                    />
                    <div
                      aria-label="Press SPACE to select this row."
                      aria-rowindex="4"
                      class="ag-row ag-row-no-focus ag-row-even ag-row-level-0 ag-row-position-absolute ag-row-last"
                      comp-id="32"
                      role="row"
                      row-id="2"
                      row-index="2"
                      style="height: 42px; transform: translateY(84px); "
                    />
                  </div>
                  
                
                  <!--AG-ROW-CONTAINER-->
                  <div
                    class="ag-center-cols-clipper"
                    name="center"
                    ref="centerContainer"
                    role="presentation"
                    style="height: 126px;"
                    unselectable="on"
                  >
                    
                    
                    <div
                      class="ag-center-cols-viewport"
                      ref="eViewport"
                      role="presentation"
                      style="height: 100%;"
                    >
                      
                        
                      <div
                        class="ag-center-cols-container"
                        ref="eContainer"
                        role="rowgroup"
                        style="width: 600px; height: 126px;"
                        unselectable="on"
                      >
                        <div
                          aria-label="Press SPACE to select this row."
                          aria-rowindex="2"
                          class="ag-row ag-row-no-focus ag-row-even ag-row-level-0 ag-row-position-absolute ag-row-first"
                          comp-id="33"
                          role="row"
                          row-id="0"
                          row-index="0"
                          style="height: 42px; transform: translateY(0px); "
                        >
                          <div
                            aria-colindex="1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-value"
                            col-id="make"
                            comp-id="34"
                            role="gridcell"
                            style="width: 200px; left: 0px;  "
                            tabindex="-1"
                            unselectable="on"
                          >
                            Toyota
                          </div>
                          <div
                            aria-colindex="2"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-value"
                            col-id="model"
                            comp-id="35"
                            role="gridcell"
                            style="width: 200px; left: 200px;  "
                            tabindex="-1"
                            unselectable="on"
                          >
                            Celica
                          </div>
                          <div
                            aria-colindex="3"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-value"
                            col-id="price"
                            comp-id="36"
                            role="gridcell"
                            style="width: 200px; left: 400px;  "
                            tabindex="-1"
                            unselectable="on"
                          >
                            35000
                          </div>
                        </div>
                        <div
                          aria-label="Press SPACE to select this row."
                          aria-rowindex="3"
                          class="ag-row ag-row-no-focus ag-row-odd ag-row-level-0 ag-row-position-absolute"
                          comp-id="37"
                          role="row"
                          row-id="1"
                          row-index="1"
                          style="height: 42px; transform: translateY(42px); "
                        >
                          <div
                            aria-colindex="1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-value"
                            col-id="make"
                            comp-id="38"
                            role="gridcell"
                            style="width: 200px; left: 0px;  "
                            tabindex="-1"
                            unselectable="on"
                          >
                            Ford
                          </div>
                          <div
                            aria-colindex="2"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-value"
                            col-id="model"
                            comp-id="39"
                            role="gridcell"
                            style="width: 200px; left: 200px;  "
                            tabindex="-1"
                            unselectable="on"
                          >
                            Mondeo
                          </div>
                          <div
                            aria-colindex="3"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-value"
                            col-id="price"
                            comp-id="40"
                            role="gridcell"
                            style="width: 200px; left: 400px;  "
                            tabindex="-1"
                            unselectable="on"
                          >
                            32000
                          </div>
                        </div>
                        <div
                          aria-label="Press SPACE to select this row."
                          aria-rowindex="4"
                          class="ag-row ag-row-no-focus ag-row-even ag-row-level-0 ag-row-position-absolute ag-row-last"
                          comp-id="41"
                          role="row"
                          row-id="2"
                          row-index="2"
                          style="height: 42px; transform: translateY(84px); "
                        >
                          <div
                            aria-colindex="1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-value"
                            col-id="make"
                            comp-id="42"
                            role="gridcell"
                            style="width: 200px; left: 0px;  "
                            tabindex="-1"
                            unselectable="on"
                          >
                            Porsche
                          </div>
                          <div
                            aria-colindex="2"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-value"
                            col-id="model"
                            comp-id="43"
                            role="gridcell"
                            style="width: 200px; left: 200px;  "
                            tabindex="-1"
                            unselectable="on"
                          >
                            Boxter
                          </div>
                          <div
                            aria-colindex="3"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-value"
                            col-id="price"
                            comp-id="44"
                            role="gridcell"
                            style="width: 200px; left: 400px;  "
                            tabindex="-1"
                            unselectable="on"
                          >
                            72000
                          </div>
                        </div>
                      </div>
                      
                    
                    </div>
                    
                
                  </div>
                  
                
                  <!--AG-ROW-CONTAINER-->
                  <div
                    class="ag-pinned-right-cols-container ag-hidden"
                    name="right"
                    ref="rightContainer"
                    role="presentation"
                    style="height: 126px;"
                    unselectable="on"
                  >
                    <div
                      aria-label="Press SPACE to select this row."
                      aria-rowindex="2"
                      class="ag-row ag-row-no-focus ag-row-even ag-row-level-0 ag-row-position-absolute ag-row-first"
                      comp-id="45"
                      role="row"
                      row-id="0"
                      row-index="0"
                      style="height: 42px; transform: translateY(0px); "
                    />
                    <div
                      aria-label="Press SPACE to select this row."
                      aria-rowindex="3"
                      class="ag-row ag-row-no-focus ag-row-odd ag-row-level-0 ag-row-position-absolute"
                      comp-id="46"
                      role="row"
                      row-id="1"
                      row-index="1"
                      style="height: 42px; transform: translateY(42px); "
                    />
                    <div
                      aria-label="Press SPACE to select this row."
                      aria-rowindex="4"
                      class="ag-row ag-row-no-focus ag-row-even ag-row-level-0 ag-row-position-absolute ag-row-last"
                      comp-id="47"
                      role="row"
                      row-id="2"
                      row-index="2"
                      style="height: 42px; transform: translateY(84px); "
                    />
                  </div>
                  
                
                  <!--AG-ROW-CONTAINER-->
                  <div
                    class="ag-full-width-container"
                    name="fullWidth"
                    ref="fullWidthContainer"
                    role="presentation"
                    style="height: 126px;"
                    unselectable="on"
                  />
                  
            
                </div>
                
            
                <div
                  class="ag-floating-bottom"
                  ref="eBottom"
                  role="presentation"
                  style="min-height: 0px; height: 0px; display: none; overflow-y: hidden;"
                  unselectable="on"
                >
                  
                
                  <!--AG-ROW-CONTAINER-->
                  <div
                    class="ag-pinned-left-floating-bottom ag-hidden"
                    name="bottomLeft"
                    ref="bottomLeftContainer"
                    role="presentation"
                    unselectable="on"
                  />
                  
                
                  <!--AG-ROW-CONTAINER-->
                  <div
                    class="ag-floating-bottom-viewport"
                    name="bottomCenter"
                    ref="bottomCenterContainer"
                    role="presentation"
                    unselectable="on"
                  >
                    
                    
                    <div
                      class="ag-floating-bottom-container"
                      ref="eContainer"
                      role="presentation"
                      style="width: 600px;"
                      unselectable="on"
                    />
                    
                
                  </div>
                  
                
                  <!--AG-ROW-CONTAINER-->
                  <div
                    class="ag-pinned-right-floating-bottom ag-hidden"
                    name="bottomRight"
                    ref="bottomRightContainer"
                    role="presentation"
                    unselectable="on"
                  />
                  
                
                  <!--AG-ROW-CONTAINER-->
                  <div
                    class="ag-floating-bottom-full-width-container"
                    name="bottomFullWidth"
                    ref="bottomFullWidthContainer"
                    role="presentation"
                    unselectable="on"
                  />
                  
            
                </div>
                
            
                <!--AG-FAKE-HORIZONTAL-SCROLL-->
                <div
                  aria-hidden="true"
                  class="ag-body-horizontal-scroll"
                  style="height: 0px; max-height: 0px; min-height: 0px;"
                >
                  
                
                  <div
                    class="ag-horizontal-left-spacer"
                    ref="eLeftSpacer"
                    style="width: 0px; max-width: 0px; min-width: 0px;"
                  />
                  
                
                  <div
                    class="ag-body-horizontal-scroll-viewport"
                    ref="eViewport"
                    style="height: 0px; max-height: 0px; min-height: 0px;"
                  >
                    
                    
                    <div
                      class="ag-body-horizontal-scroll-container"
                      ref="eContainer"
                      style="height: 0px; max-height: 0px; min-height: 0px; width: 600px;"
                    />
                    
                
                  </div>
                  
                
                  <div
                    class="ag-horizontal-right-spacer"
                    ref="eRightSpacer"
                    style="width: 0px; max-width: 0px; min-width: 0px;"
                  />
                  
            
                </div>
                
            
                <!--AG-OVERLAY-WRAPPER-->
                <div
                  aria-hidden="true"
                  class="ag-overlay ag-hidden"
                >
                  
                
                  <div
                    class="ag-overlay-panel"
                  >
                    
                    
                    <div
                      class="ag-overlay-wrapper ag-layout-normal"
                      ref="eOverlayWrapper"
                    />
                    
                
                  </div>
                  
            
                </div>
                
        
              </div>
              
                        
                    
              <div
                class="ag-tab-guard ag-tab-guard-bottom"
                role="presentation"
                tabindex="0"
              />
            </div>
            
                    
                    
            <!--AG-PAGINATION-->
            <div
              aria-describedby="ag-17-start-page ag-17-start-page-number ag-17-of-page ag-17-of-page-number ag-17-first-row ag-17-to ag-17-last-row ag-17-of ag-17-row-count"
              aria-live="polite"
              class="ag-paging-panel ag-unselectable ag-hidden"
              id="ag-17"
            >
              
                    
              <span
                aria-hidden="true"
                class="ag-paging-row-summary-panel"
              >
                
                        
                <span
                  class="ag-paging-row-summary-panel-number"
                  id="ag-17-first-row"
                  ref="lbFirstRowOnPage"
                />
                
                        
                <span
                  id="ag-17-to"
                >
                  to
                </span>
                
                        
                <span
                  class="ag-paging-row-summary-panel-number"
                  id="ag-17-last-row"
                  ref="lbLastRowOnPage"
                />
                
                        
                <span
                  id="ag-17-of"
                >
                  of
                </span>
                
                        
                <span
                  class="ag-paging-row-summary-panel-number"
                  id="ag-17-row-count"
                  ref="lbRecordCount"
                />
                
                    
              </span>
              
                    
              <span
                class="ag-paging-page-summary-panel"
                role="presentation"
              >
                
                        
                <div
                  aria-label="First Page"
                  class="ag-paging-button"
                  ref="btFirst"
                  role="button"
                  tabindex="0"
                >
                  <span
                    class="ag-icon ag-icon-first"
                    role="presentation"
                    unselectable="on"
                  />
                </div>
                
                        
                <div
                  aria-label="Previous Page"
                  class="ag-paging-button"
                  ref="btPrevious"
                  role="button"
                  tabindex="0"
                >
                  <span
                    class="ag-icon ag-icon-previous"
                    role="presentation"
                    unselectable="on"
                  />
                </div>
                
                        
                <span
                  aria-hidden="true"
                  class="ag-paging-description"
                >
                  
                            
                  <span
                    id="ag-17-start-page"
                  >
                    Page
                  </span>
                  
                            
                  <span
                    class="ag-paging-number"
                    id="ag-17-start-page-number"
                    ref="lbCurrent"
                  />
                  
                            
                  <span
                    id="ag-17-of-page"
                  >
                    of
                  </span>
                  
                            
                  <span
                    class="ag-paging-number"
                    id="ag-17-of-page-number"
                    ref="lbTotal"
                  />
                  
                        
                </span>
                
                        
                <div
                  aria-label="Next Page"
                  class="ag-paging-button"
                  ref="btNext"
                  role="button"
                  tabindex="0"
                >
                  <span
                    class="ag-icon ag-icon-next"
                    role="presentation"
                    unselectable="on"
                  />
                </div>
                
                        
                <div
                  aria-label="Last Page"
                  class="ag-paging-button"
                  ref="btLast"
                  role="button"
                  tabindex="0"
                >
                  <span
                    class="ag-icon ag-icon-last"
                    role="presentation"
                    unselectable="on"
                  />
                </div>
                
                    
              </span>
              
                
            </div>
            
                    
                
          </div>
        </div>
      </div>
    </div>
  `);
});

test("AG Grid can be edited", async () => {
    const {container} = render(<App/>);
    await waitFor(() => ensureFirstDataRendered(container));
    const el = getByText(container, '35000');
    expect(el).toBeTruthy();
    userEvent.dblClick(el);
    const inputEl = document.querySelector(`[row-index="0"] [col-id="price"] input`);
    expect(inputEl).toBeTruthy()
    userEvent.type(inputEl, '42000');
    expect(inputEl.value).toEqual("42000")
    userEvent.type(inputEl, `${specialChars.enter}`)
    const el2 = document.querySelector(`[row-index="0"] [col-id="price"]`);
    expect(el2.innerHTML).toEqual("42000");
})
