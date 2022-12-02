import { deleteData, postData, putData } from 'api';
import { call, take, put, takeEvery, fork, all, spawn, takeLatest, takeLeading } from 'redux-saga/effects';

function* workerAddTask() {
  while(true) {
    const action = yield take('ADD_TASK_SAGA');
    const editedProject = yield call(postData, 'task' , action.payload );
    yield put({ type:'EDIT_PROJECT', payload: { editedProject }});
  }
}

// проработать ручку изменения проекта

function* workerChangeColumns(action) {
  yield fork(putData, 'task/columns' , action.payload );
  yield put({ type:'DND_EFFECT_PROJECT', payload: action.payload});
}

function* workerChangeName(action) {
    const editedProject = yield call(putData, 'task/name' , action.payload );
    yield put({ type:'EDIT_PROJECT', payload: { editedProject }});
}

function* workerChangeDescription(action) {
  const editedProject = yield call(putData, 'task/description' , action.payload );
  yield put({ type:'EDIT_PROJECT', payload: { editedProject }});
}

function* workerChangePriority(action) {
  const editedProject = yield call(putData, 'task/priority' , action.payload );
  yield put({ type:'EDIT_PROJECT', payload: { editedProject }});
}

// дополнительные задачи

function* workerAddAdditionalTask(action) {
  const editedProject = yield call(postData, 'task/additional' , action.payload );
  yield put({ type:'EDIT_PROJECT', payload: { editedProject }});
}

function* workerChangeAdditionalTask(action) {
  const editedProject = yield call(putData, 'task/additional' , action.payload );
  yield put({ type:'EDIT_PROJECT', payload: { editedProject }});
}

function* workerDeleteAdditionalTask(action) {
  const editedProject = yield call(deleteData, 'task/additional' , action.payload );
  yield put({ type:'EDIT_PROJECT', payload: { editedProject }});
}


export default function* whatchSelectedProject () {
  yield all([
      call(workerAddTask),
      takeLatest('EDIT_COLUMNS_SAGA', workerChangeColumns),
      takeLatest("CHANGE_NAME_SAGA", workerChangeName),
      takeLatest("CHANGE_DESCRIPTION_SAGA", workerChangeDescription),
      takeLatest("CHANGE_PRIORITY_SAGA", workerChangePriority),
      takeLeading("ADD_ADDITIONAL_TASK_SAGA", workerAddAdditionalTask),
      takeLatest("CHANGE_ADDITIONAL_TASK_SAGA", workerChangeAdditionalTask),
      takeLeading("DELETE_ADDITIONAL_TASK_SAGA", workerDeleteAdditionalTask),
    ])
}