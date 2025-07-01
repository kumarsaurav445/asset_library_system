Asset Library System
=============================================


Features on landing page
    1) User can search the asset by Title or Description
    2) Search will be applicable for both Type and Trending section which is always visible.
    3) Recent search is showcased right below searchText, User can click on recent searches and clear those as well.
    4) By default, within each section, Only 2 records are showcased. Click on showmore button to get 2 more and repeated the same everytime.

===============================================


Folder Structure
- `/components` – UI components
- `/modals` – Specialized modal views
- `/data/mockData.ts` – Asset data mock. Currently it is having all the assets details but can be split into multiple, one for getting asset metadata and one for getting complete asset details which can be showcased in popup.
- `/pages/index.tsx` – Main screen

===============================================


Follow below steps to run locally

    npm install
    npm run dev




================================================

Doubts

1) what is meant by expanded asset section/additional assets and view for it.
2) Currently Request button popup is not implemented. No description on request popup content
3) With regard to KPI Modal, I don't see UI for metricIds, calculation and affiliate marketing. What will go in asset detail popup center body, where in current design, it is blank with gray background.
4) With regard to Data_Viz Modal, This type is not available in dashboard page, Dashboard page have only 4 types, "Featured", "KPI", "Layout", "StoryBoards" and Data_Viz is not part of it. In that case, how will user open any Data_Viz popup. Also, Do i need to add graph as one of the attribute is "interact with graph"
5) With regard to Layouts Modal, the detail page popup is for Layouts Modal but it contains Business questions as popup content which is part of KPI modal based on flowchart.
6) With regard to StoryBoard Modal, Design is again missing. Not sure how attribute view will look like.

================================================

Enhancements
================================================

1) Breakup of mock data into multiple files with limited and detailed asset content accoding to landing and popup page.
2) Use of constants for static content used.
3) Complete the Modal for other 2 modal(Story_board- currently being showcased similar to Layout, Data_Viz). Pending because of incomplete details.
