import { Button } from 'react-bootstrap';
import { MainTemplate } from '../../templates/MainTemplate';
import { Icon } from '@iconify/react';
import { Tooltip } from '../../components/Tooltip';
import Swal from 'sweetalert2';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { TaskActionsTypes } from '../../contexts/TaskContext/taskActions';
import './styles.module.css';

import DataTable, { type DataTableRef } from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import 'datatables.net-buttons-bs5';
import 'datatables.net-responsive-bs5';
import { useEffect, useRef } from 'react';
import { getTaskStatus } from '../../utils/getTaskStatus';

export function History() {
  DataTable.use(DT);

  const { dispatch, state } = useTaskContext();

  const handleClearHistory = () => {
    // console.log('Limpar histórico');
    Swal.fire({
      title: 'Limpar histórico',
      text: 'Tem certeza que deseja limpar o histórico?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-secondary',
      },
    }).then(result => {
      if (result.isConfirmed) {
        dispatch({
          type: TaskActionsTypes.RESET_STATE,
        });
      }
    });
  };

  const tableRef = useRef<DataTableRef | null>(null);

  useEffect(() => {
    const table = tableRef.current?.dt();
    if (!table) return;
    table.clear();
    table.rows.add(state.tasks);
    table.draw(false); // false evita resetar paginação
  }, [state.tasks]);

  return (
    <MainTemplate>
      <div className='d-flex flex-row align-items-center justify-content-between mt-5 gap-3'>
        <h1 className='text-center text-neutral'>Histórico</h1>
        <Tooltip key='clear-history-tooltip' title='Limpar histórico'>
          <Button
            variant='outline-danger'
            className='m-0 px-2'
            onClick={handleClearHistory}
          >
            <Icon
              icon='solar:trash-bin-trash-bold-duotone'
              width={20}
              height={20}
            />
          </Button>
        </Tooltip>
      </div>

      <div>
        <DataTable
          ref={tableRef}
          id='historyTable'
          className='text-neutral'
          options={{
            responsive: true,
            order: [[0, 'desc']],
            pageLength: 10,
            data: state.tasks,
            columns: [
              { data: 'name' },
              { data: 'duration' },
              { data: 'startsAt' },
              { data: 'interruptedAt' },
              { data: 'type' },
            ],
            columnDefs: [
              {
                targets: ['taskName'],
                render: data => {
                  return `<span class="text-neutral">${data}</span>`;
                },
              },
              {
                targets: ['taskDuration'],
                render: data => {
                  return `<span class="text-neutral">${data}min</span>`;
                },
              },
              {
                targets: ['taskStartsAt'],
                render: data => {
                  return `<span class="text-neutral">${new Date(
                    data,
                  ).toLocaleString()}</span>`;
                },
              },
              {
                targets: ['taskStatus'],
                render: (_, __, row) => {
                  return `<span class="text-neutral">${getTaskStatus(
                    row,
                    state.activeTask,
                  )}</span>`;
                },
              },
              {
                targets: ['taskType'],
                render: data => {
                  const cycleTypeMap = {
                    workTime: 'Trabalho',
                    shortBreakTime: 'Pausa curta',
                    longBreakTime: 'Pausa longa',
                  };
                  return `<span class="text-neutral">${
                    cycleTypeMap[data as keyof typeof cycleTypeMap] || data
                  }</span>` as string;
                },
              },
            ],
            language: {
              emptyTable: 'Nenhuma task encontrada',
            },
          }}
        >
          <thead>
            <tr>
              <th className='taskName'>Tarefa</th>
              <th className='taskDuration'>Duração</th>
              <th className='taskStartsAt'>Data</th>
              <th className='taskStatus'>Status</th>
              <th className='taskType'>Tipo</th>
            </tr>
          </thead>
        </DataTable>
      </div>
    </MainTemplate>
  );
}
