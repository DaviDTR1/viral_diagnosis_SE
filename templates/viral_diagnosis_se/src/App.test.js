import { fireEvent, render, screen } from '@testing-library/react';
import SymptomsFormMain from './form/SymptomsFormMain';

// describe("Symptoms Form", () => {
//   test("User is able to submit form if symptoms are provided", () => {
//     const symptomsSelected = ['dolor de cabeza', 'fiebre alta', 'malestar general', 'nauseas', 'vomitos'];
//     const handleSubmit = jest.fn();
//     render(<SymptomsFormMain onSubmit={handleSubmit}/>);
//     const symptomsSelect = screen.getByLabelText(/Síntomas/);
//     fireEvent.change(symptomsSelect, { target: {value: symptomsSelected} });
//     const submitButton = screen.getByRole("button");
//     fireEvent.click(submitButton);
//     expect(handleSubmit).toHaveBeenCalledWith({
//       symptomsSelected,
//     });
//   });
// });
