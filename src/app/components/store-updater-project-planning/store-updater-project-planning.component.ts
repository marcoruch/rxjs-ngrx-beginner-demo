import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, startWith, map } from 'rxjs';
import {
  addInvalidCommand,
  addMember,
  addProject,
  assignMember,
  removeMember,
  removeProject,
  resetAll,
} from 'src/app/features/project-planning/project-planning.actions';
import { selectRanCommands } from 'src/app/features/project-planning/project-planning.selectors';

@Component({
  selector: 'app-store-updater-project-planning',
  templateUrl: './store-updater-project-planning.component.html',
  styleUrls: ['./store-updater-project-planning.component.scss'],
})
export class StoreUpdaterProjectPlanningComponent {
  options: string[] = [
    'add-member',
    'remove-member',
    'reset-all',
    'assign-member',
    'add-project',
    'remove-project',
  ];
  exampleCommands: string[] = [
  'add-member Marco 30',
  'remove-member Marco',
  'reset-all',
  'assign-member Project-1 Marco 10',
  'add-project Project-6 30',
  'remove-project Project-6',
  ]
  ranCommands$ = this.store.select(selectRanCommands);
  selectedOptionOffset: number = -1;

  constructor(readonly store: Store) {}

  runCommand(command: string) {
    console.log(`Running command: ${command}`);
    const possibleAction = command.split(' ')[0];
    if (this.options.includes(possibleAction) === false) {
      this.store.dispatch(addInvalidCommand({ command }));
      return;
    }

    const action = possibleAction;

    // build props for action
    switch (action) {
      case 'add-member':
        this.validateAndRunAddMember(command);
        break;
      case 'remove-member':
        this.validateAndRunRemoveMember(command);
        break;
      case 'reset-all':
        this.validateAndRunResetAll(command);
        break;
      case 'assign-member':
        this.validateAndRunAssignMember(command);
        break;
      case 'add-project':
        this.validateAndRunAddProject(command);
        break;
      case 'remove-project':
        this.validateAndRunRemoveProject(command);
        break;
      default:
        console.log(`Invalid action: ${action}`);
        break;
    }
  }

  clickedOption(option: string, input: HTMLElement) {
    (input as HTMLInputElement).value = option;
  }

  runExampleCommand(command: string) {
    this.runCommand(command);
  }

  inputKeyUp(input: HTMLElement, event: any): void {
    // if enter validate
    if (event.keyCode === 13) {
      this.runCommand(event.target.value);

      (input as HTMLInputElement).value = '';
      this.selectedOptionOffset = 0;
      return;
    }

    if (event.keyCode === 38) {
      // up arrow
      this.selectedOptionOffset = this.selectedOptionOffset > this.options.length - 2 || this.selectedOptionOffset < 0 ? 0 : this.selectedOptionOffset + 1;
      (input as HTMLInputElement).value = this.options[this.selectedOptionOffset];
    }

    if (event.keyCode === 40) {
      // down arrow
      this.selectedOptionOffset = this.selectedOptionOffset < 1 ? this.options.length - 1 : this.selectedOptionOffset - 1;
      (input as HTMLInputElement).value = this.options[this.selectedOptionOffset];
    }
  }

  validateAndRunAddProject(command: string) {
    // validate props
    if (command.split(' ').length !== 3) {
      this.store.dispatch(addInvalidCommand({ command }));
      return;
    }

    // validate name
    if (command.split(' ')[1].length === 0) {
      this.store.dispatch(addInvalidCommand({ command }));
      return;
    }

    // validate neededTime
    if (isNaN(parseInt(command.split(' ')[2], 10))) {
      this.store.dispatch(addInvalidCommand({ command }));
      return;
    }

    const addProjectProps = {
      name: command.split(' ')[1],
      neededTime: parseInt(command.split(' ')[2], 10),
    };
    this.store.dispatch(addProject(addProjectProps));
  }

  validateAndRunAddMember(command: string) {
    // validate props
    if (command.split(' ').length !== 3) {
      this.store.dispatch(addInvalidCommand({ command }));
      return;
    }
    // validate availableTime
    if (isNaN(parseInt(command.split(' ')[2], 10))) {
      this.store.dispatch(addInvalidCommand({ command }));
      return;
    }
    // validate name
    if (command.split(' ')[1].length === 0) {
      this.store.dispatch(addInvalidCommand({ command }));
      return;
    }

    const addMemberProps = {
      name: command.split(' ')[1],
      availableTime: parseInt(command.split(' ')[2], 10),
    };
    this.store.dispatch(addMember(addMemberProps));
  }

  validateAndRunRemoveMember(command: string) {
    // validate props
    if (command.split(' ').length !== 2) {
      this.store.dispatch(addInvalidCommand({ command }));
      return;
    }
    // validate name
    if (command.split(' ')[1].length === 0) {
      this.store.dispatch(addInvalidCommand({ command }));
      return;
    }

    const removeMemberProps = {
      name: command.split(' ')[1],
    };
    this.store.dispatch(removeMember(removeMemberProps));
  }

  validateAndRunResetAll(command: string) {
    // validate props
    if (command.split(' ').length !== 1) {
      this.store.dispatch(addInvalidCommand({ command }));
      return;
    }

    this.store.dispatch(resetAll());
  }

  validateAndRunAssignMember(command: string) {
    // validate props
    if (command.split(' ').length !== 4) {
      this.store.dispatch(addInvalidCommand({ command }));
      return;
    }
    // validate projectName
    if (command.split(' ')[1].length === 0) {
      this.store.dispatch(addInvalidCommand({ command }));
      return;
    }

    // validate memberName
    if (command.split(' ')[2].length === 0) {
      this.store.dispatch(addInvalidCommand({ command }));
      return;
    }

    // validate time
    if (isNaN(parseInt(command.split(' ')[3], 10))) {
      this.store.dispatch(addInvalidCommand({ command }));
      return;
    }

    const assignMemberProps = {
      projectName: command.split(' ')[1],
      memberName: command.split(' ')[2],
      time: parseInt(command.split(' ')[3], 10),
    };

    this.store.dispatch(assignMember(assignMemberProps));
  }

  validateAndRunRemoveProject(command: string) {
    // validate props
    if (command.split(' ').length !== 2) {
      this.store.dispatch(addInvalidCommand({ command }));
      return;
    }
    // validate projectName
    if (command.split(' ')[1].length === 0) {
      this.store.dispatch(addInvalidCommand({ command }));
      return;
    }

    const removeProjectProps = {
      name: command.split(' ')[1],
    };
    this.store.dispatch(removeProject(removeProjectProps));
  }
}
