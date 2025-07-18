# End-to-End Testing for Sentinel-2 Explorer App
End-to-end tests for the Sentinel-2 Explorer App ensure the functionality and reliability of key features.

## Run the Tests
- To run the tests, use the following command:
```bash
npm run e2e:sentinel2
```

To run the tests in a headed mode, use the following command:
```bash
npm run e2e:sentinel2:headed
```

To run a specific test file, use the following command:
```bash
npx playwright test e2e/sentinel2/tests/{file-name} --config e2e/playwright.sentinel2.config.ts --headed --workers=1
```

## Test "Dynamic" Mode

### Run the Test
To run the "Dynamic Mode" test, use the following command:
```bash 
npx playwright test e2e/sentinel2/tests/DynamicMode.test.ts --config e2e/playwright.sentinel2.config.ts --headed --workers=1
```

### Test Steps
1. Verify the "Interesting Places" container is visible.
2. Confirm that the "Fucino" and "Mississippi" interesting place cards are displayed.
3. Click the "Fucino" card and ensure it is selected while "Mississippi" is not.
4. Click the "Mississippi" card and ensure it is selected while "Fucino" is not.
5. Hover over the "Fucino" card and verify a tooltip appears.
6. Verify the "Renderer Selector" container is visible.
7. Confirm that the "Natural Color" and "Color IR" renderer cards are displayed.
8. Click the "Natural Color" renderer card and ensure it is selected while "Color IR" is not.
9. Verify the URL hash contains `Natural+Color+for+Visualization`.
10. Click the "Color IR" renderer card and ensure it is selected while "Natural Color" is not.
11. Verify the URL hash contains `Color+Infrared+for+Visualization`.
12. Hover over the "Natural Color" renderer card and verify a tooltip appears.

## Test "Find a Scene" Mode

### Run the Test
To run the "Find a Scene" test, use the following command:
```bash 
npx playwright test e2e/sentinel2/tests/FindASceneMode.test.ts --config e2e/playwright.sentinel2.config.ts --headed --workers=1
```

### Test Steps
1. Navigate to the "Find a Scene" mode URL (e.g., `http://localhost:8080/#mode=find+a+scene`).
2. Verify the "Scene Selection" header is visible.
3. Confirm the calendar container is displayed.
4. Ensure the year selection dropdown is visible and initially set to "Past 12 Months".
5. Open the year selection dropdown and choose "2024".
6. Verify the dropdown updates to show "2024" as the selected year.
7. Check that the calendar displays January 2024.
8. Confirm calendar cells with available scenes (e.g., January 3, 2024) are visible.
9. Hover over a calendar cell and verify a tooltip appears.
10. Click a calendar cell and ensure the scene information table appears.
11. Verify the scene information table displays the correct acquisition date ("Jan 03, 2024").
12. Check that the acquisition date label is visible and has the correct attribute (`data-aququisition-date="2024-01-03"`).
13. Click the reset button and confirm the acquisition date label and scene information table are hidden.

## Test "Swipe Mode"

### Run the Test
To run the "Swipe Mode" test, use the following command:
```bash
npx playwright test e2e/sentinel2/tests/SwipeMode.test.ts --config e2e/playwright.sentinel2.config.ts --headed --workers=1
```

### Test Steps
1. Navigate to the "Swipe Mode" URL (e.g., `http://localhost:8080/#mapCenter=-117.07809%2C34.03876%2C13.516&mode=swipe`).
2. Verify the left and right swipe layer selectors are visible.
3. Select the date for the left swipe layer (e.g., "2024-01-08").
4. Confirm the left swipe layer displays the correct acquisition date (`data-acquisition-date="2024-01-08"`).
5. Select the date for the right swipe layer (e.g., "2024-12-18").
6. Confirm the right swipe layer displays the correct acquisition date (`data-acquisition-date="2024-12-18"`).
7. Verify the swap button is visible.
8. Click the swap button.
9. Ensure the left swipe layer now displays "2024-12-18" and the right swipe layer displays "2024-01-08".

## Test "Map Popup"

### Run the Test
To run the test, use the following command:
```bash
npx playwright test e2e/sentinel2/tests/MapPopup.test.ts --config e2e/playwright.sentinel2.config.ts --headed --workers=1
```

### Test Steps
1. Locates the map view container and ensures it is visible.
2. Selects the specified day from the calendar.
3. Clicks on the map to trigger the popup.
4. Verifies the popup is visible and its title contains the formatted date.
5. Checks that the popup content contains the expected spectral indices (NDMI, NDVI, MNDWI).
6. Ensures the popup location info is present and clickable.
7. Verifies that the coordinates are copied to the clipboard in the expected format after clicking the location info.

## Test "Animate" Mode

### Run the Test
To run the "Animate" test, use the following command:
```bash 
npx playwright test e2e/sentinel2/tests/AnimateMode.test.ts --config e2e/playwright.sentinel2.config.ts --headed --workers=1
```

### Test Steps

1. Navigate to the main app URL.
2. Click the "Animate" mode button and ensure the animation panel is visible.
3. Add animation frames using the "Add Animation Frame" button and calendar.
4. Verify that the animation frames are displayed in chronological order (e.g. 2023-08-01, 2024-01-03, 2024-12-18).
5. For each frame, confirm the correct acquisition date and renderer label are shown, and that the frame can be selected.
6. Test the animation controls:
    - Click the play button and verify the loading indicator and "loading" status.
    - Wait for the animation to start and confirm the "playing" status.
    - Click the pause button and check for the "pausing" status.
    - Click the resume button and ensure the status returns to "playing".
    - Click the stop button and verify the animation status is cleared.
7. Remove all animation frames one by one using the remove button on each card.
8. Confirm that the animation frames list is empty after removal.

## Test "Spectral Profile" Tool

### Run the Test
To run the "Spectral Profile Tool" test, use the following command:
```bash 
npx playwright test e2e/sentinel2/tests/SpectralProfileTool.test.ts --config e2e/playwright.sentinel2.config.ts --headed --workers=1
```

### Test Steps
1. Activate "Analyze Mode" and open the "Spectral Profile Tool".
2. Select a date from the calendar.
3. Simulate a map click to trigger the spectral profile.
4. Verify the spectral profile chart and legend are visible.
5. Confirm the correct feature of interest is displayed in the legend.

## Test "Save Panel"

### Run the Test
To run the "Save Panel" test, use the following command:
```bash
npx playwright test e2e/sentinel2/tests/SavePanel.test.ts --config e2e/playwright.sentinel2.config.ts --headed --workers=1
```

### Test Steps
1. Open the application and ensure you are signed in to ArcGIS Online via the Save Panel.
2. **When no scene is selected:**
    - Open the Save Panel.
    - Confirm only the "Save as Web Mapping Application" option is available.
    - Launch the save workflow and complete the dialog.
    - Verify a new job appears in the job list with a successful status.
    - Check that the "Open Job" button links to the ArcGIS Online item details page.
3. **With a single Sentinel-2 scene selected:**
    - Select a scene from the calendar.
    - Open the Save Panel and sign in.
    - Confirm the options: "Save as Web Mapping Application", "Save as Web Map", and "Publish Scene" are available.
    - Save as a Web Map and verify the job appears and links correctly.
    - Publish the scene as a hosted imagery service:
      - Review the estimated credit cost.
      - Accept the credits to proceed.
      - Confirm the job completes successfully and links to the ArcGIS Online item.
4. **With multiple scenes selected (e.g., in Swipe Mode):**
    - Ensure two scenes are selected.
    - Open the Save Panel and sign in.
    - Confirm the options: "Save as Web Mapping Application", "Save Web Map with Multiple Scenes", and "Save Web Map with Multiple Scenes in Single Layer" are available.
    - Save as a Web Map with multiple scenes and verify the job.
    - Save as a Web Map with multiple scenes in a single layer and verify the job.
    - Use the "Clear All" button to remove all jobs from the job list and confirm the list is empty.
5. **In Index Mask Tool mode:**
    - Select a scene and activate the Index Mask Tool.
    - Open the Save Panel and sign in.
    - Confirm the options: "Save as Web Mapping Application", "Save as Web Map", "Publish Scene", and "Publish Index Mask" are available.
    - Publish the index mask output as a hosted imagery service and verify the job completes successfully.
6. **In Change Detection Tool mode:**
    - Select two scenes and activate the Change Detection Tool.
    - Open the Save Panel and sign in.
    - Confirm the options: "Save as Web Mapping Application", "Save Web Map with Multiple Scenes", "Save Web Map with Multiple Scenes in Single Layer", and "Publish Change Detection" are available.
    - Publish the change detection output as a hosted imagery service and verify the job completes successfully.
7. **Rejecting credits for a job:**
    - Select a scene and open the Save Panel.
    - Publish the scene as a hosted imagery service.
    - When prompted with the estimated credit cost, choose to reject credits.
    - Confirm the job is removed from the job list.
8. **Error handling during publishing:**
    - Select a scene and open the Save Panel.
    - Attempt to publish the scene as a hosted imagery service.
    - Simulate an error during the publishing process.
    - Confirm the job status is marked as failed in the job list.