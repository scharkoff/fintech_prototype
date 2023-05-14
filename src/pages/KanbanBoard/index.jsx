import React from 'react';
import styles from './KanbanBoard.module.scss';
import AddIcon from '@mui/icons-material/Add';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Container, Typography, IconButton } from '@mui/material';

export function KanbanBoard() {
  const [groups, setGroups] = React.useState([
    {
      id: 1,
      title: 'Учеба',
      status: 'backlog',
      tasks: [
        {
          id: 1,
          text: 'Сделать уроки',
          status: 'backlog',
        },
        {
          id: 2,
          text: 'Решить математику',
          status: 'backlog',
        },
        {
          id: 3,
          text: 'Почитать литературу',
          status: 'backlog',
        },
      ],
    },
  ]);

  const handleAddGroup = (groupStatus) => {
    setGroups((prevGroups) => [
      ...prevGroups,
      {
        id: new Date().valueOf(),
        title: 'Новая группа',
        status: groupStatus,
        tasks: [],
      },
    ]);
  };

  const handleAddTask = (groupId, groupStatus) => {
    const newGroups = groups.map((group) => {
      if (group.id === groupId) {
        return {
          ...group,
          tasks: [
            ...group.tasks,
            {
              id: new Date().valueOf(),
              text: 'Новое задание',
              status: groupStatus,
            },
          ],
        };
      }
      return group;
    });

    setGroups(newGroups);
  };

  const handleDeleteTask = (groupId, taskId) => {
    setGroups((prevGroups) => {
      const updatedGroups = prevGroups.map((group) => {
        if (group.id === groupId) {
          const updatedTasks = group.tasks.filter((task) => task.id !== taskId);
          return { ...group, tasks: updatedTasks };
        }
        return group;
      });
      return updatedGroups;
    });
  };

  const handleDragStart = (
    event,
    onDragStartGroupId,
    onDragStartTaskId,
    onDragStartTaskText,
  ) => {
    event.dataTransfer.setData(
      'text/plain',
      JSON.stringify({
        onDragStartGroupId,
        onDragStartTaskId,
        onDragStartTaskText,
      }),
    );
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, targetStatus, targetGroupId) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const { onDragStartGroupId, onDragStartTaskId, onDragStartTaskText } =
      JSON.parse(data);

    const newGroups = groups.map((group) => {
      if (onDragStartGroupId === targetGroupId) {
        return group;
      }

      if (group.id === targetGroupId) {
        group.tasks.push({
          id: onDragStartTaskId,
          text: onDragStartTaskText,
          status: targetStatus,
        });
      }

      if (group.id === onDragStartGroupId) {
        group.tasks = group.tasks.filter(
          (task) => task.id !== onDragStartTaskId,
        );
      }

      return group;
    });

    setGroups(newGroups);
  };

  return (
    <Container maxWidth="lg">
      <div className={styles.kanbanBoardWrapper}>
        <Typography variant="h5" color="gray" marginBottom={5}>
          Kanban Board
        </Typography>

        <div className={styles.boardsWrapper}>
          <div className={styles.board}>
            <Typography
              variant="h6"
              color="GrayText"
              className={styles.backlogTitle}
            >
              Backlog
            </Typography>

            <div className={styles.boardContentWrapper}>
              {groups
                .filter((group) => group.status === 'backlog')
                .map((group, i) => (
                  <div
                    key={i}
                    className={styles.boardGroup}
                    onDragOver={handleDragOver}
                    onDrop={(event) => handleDrop(event, 'backlog', group.id)}
                  >
                    <div className={styles.boardGroupTitleWrapper}>
                      <input
                        className={styles.boardGroupTitle}
                        value={group.title}
                        onChange={(event) => {
                          const newGroups = [...groups];
                          newGroups[i] = {
                            ...group,
                            title: event.target.value,
                          };
                          setGroups(newGroups);
                        }}
                      />
                      <IconButton
                        size="small"
                        style={{ marginLeft: 3 }}
                        onClick={() => handleAddTask(group.id, 'backlog')}
                      >
                        <LibraryAddIcon fontSize="small" />
                      </IconButton>
                    </div>
                    {group.tasks
                      .filter((task) => task.status === 'backlog')
                      .map((task, j) => (
                        <div
                          key={task.id}
                          className={styles.task}
                          draggable
                          onDragStart={(event) =>
                            handleDragStart(event, group.id, task.id, task.text)
                          }
                        >
                          <div className={styles.taskInputWrapper}>
                            <input
                              type="text"
                              placeholder="Введите текст..."
                              value={task.text}
                              onChange={(event) => {
                                const newGroups = [...groups];
                                newGroups.forEach((newGroup) => {
                                  if (newGroup.id === group.id) {
                                    const newTasks = [...newGroup.tasks];
                                    newTasks[j] = {
                                      ...task,
                                      text: event.target.value,
                                    };
                                    newGroup.tasks = newTasks;
                                  }
                                });
                                setGroups(newGroups);
                              }}
                            />
                            <DeleteForeverIcon
                              fontSize="small"
                              color="disabled"
                              className={styles.deleteIcon}
                              onClick={() =>
                                handleDeleteTask(group.id, task.id)
                              }
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                ))}

              <IconButton
                size="small"
                style={{ marginTop: 10 }}
                onClick={() => handleAddGroup('backlog')}
              >
                <AddIcon fontSize="small" color="primary" />
              </IconButton>
            </div>
          </div>

          <div className={styles.board}>
            <Typography
              variant="h6"
              color="GrayText"
              className={styles.inProgressTitle}
            >
              In progress
            </Typography>

            <div className={styles.boardContentWrapper}>
              {groups
                .filter((group) => group.status === 'inprogress')
                .map((group, i) => (
                  <div
                    key={i}
                    className={styles.boardGroup}
                    onDragOver={handleDragOver}
                    onDrop={(event) =>
                      handleDrop(event, 'inprogress', group.id)
                    }
                  >
                    <div className={styles.boardGroupTitleWrapper}>
                      <input
                        className={styles.boardGroupTitle}
                        value={group.title}
                        onChange={(event) => {
                          const newGroups = [...groups];
                          newGroups[i] = {
                            ...group,
                            title: event.target.value,
                          };
                          setGroups(newGroups);
                        }}
                      />
                      <IconButton
                        size="small"
                        style={{ marginLeft: 3 }}
                        onClick={() => handleAddTask(group.id, 'inprogress')}
                      >
                        <LibraryAddIcon fontSize="small" />
                      </IconButton>
                    </div>

                    {group.tasks
                      .filter((task) => task.status === 'inprogress')
                      .map((task, j) => (
                        <div
                          key={task.id}
                          className={styles.task}
                          draggable
                          onDragStart={(event) =>
                            handleDragStart(event, group.id, task.id, task.text)
                          }
                        >
                          <div className={styles.taskInputWrapper}>
                            <input
                              type="text"
                              placeholder="Введите текст..."
                              value={task.text}
                              onChange={(event) => {
                                const newGroups = [...groups];
                                newGroups.forEach((newGroup) => {
                                  if (newGroup.id === group.id) {
                                    const newTasks = [...newGroup.tasks];
                                    newTasks[j] = {
                                      ...task,
                                      text: event.target.value,
                                    };
                                    newGroup.tasks = newTasks;
                                  }
                                });
                                setGroups(newGroups);
                              }}
                            />
                            <DeleteForeverIcon
                              fontSize="small"
                              color="disabled"
                              className={styles.deleteIcon}
                              onClick={() =>
                                handleDeleteTask(group.id, task.id)
                              }
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                ))}

              <IconButton
                size="small"
                style={{ marginTop: 10 }}
                onClick={() => handleAddGroup('inprogress')}
              >
                <AddIcon fontSize="small" color="primary" />
              </IconButton>
            </div>
          </div>

          <div className={styles.board}>
            <Typography
              variant="h6"
              color="GrayText"
              className={styles.doneTitle}
            >
              Done
            </Typography>

            <div className={styles.boardContentWrapper}>
              {groups
                .filter((group) => group.status === 'done')
                .map((group, i) => (
                  <div
                    key={i}
                    className={styles.boardGroup}
                    onDragOver={handleDragOver}
                    onDrop={(event) => handleDrop(event, 'done', group.id)}
                  >
                    <div className={styles.boardGroupTitleWrapper}>
                      <input
                        className={styles.boardGroupTitle}
                        value={group.title}
                        onChange={(event) => {
                          const newGroups = [...groups];
                          newGroups[i] = {
                            ...group,
                            title: event.target.value,
                          };
                          setGroups(newGroups);
                        }}
                      />
                      <IconButton
                        size="small"
                        style={{ marginLeft: 3 }}
                        onClick={() => handleAddTask(group.id, 'done')}
                      >
                        <LibraryAddIcon fontSize="small" />
                      </IconButton>
                    </div>

                    {group.tasks
                      .filter((task) => task.status === 'done')
                      .map((task, j) => (
                        <div
                          key={task.id}
                          className={styles.task}
                          draggable
                          onDragStart={(event) =>
                            handleDragStart(event, group.id, task.id, task.text)
                          }
                        >
                          <div className={styles.taskInputWrapper}>
                            <input
                              type="text"
                              placeholder="Введите текст..."
                              value={task.text}
                              onChange={(event) => {
                                const newGroups = [...groups];
                                newGroups.forEach((newGroup) => {
                                  if (newGroup.id === group.id) {
                                    const newTasks = [...newGroup.tasks];
                                    newTasks[j] = {
                                      ...task,
                                      text: event.target.value,
                                    };
                                    newGroup.tasks = newTasks;
                                  }
                                });
                                setGroups(newGroups);
                              }}
                            />
                            <DeleteForeverIcon
                              fontSize="small"
                              color="disabled"
                              className={styles.deleteIcon}
                              onClick={() =>
                                handleDeleteTask(group.id, task.id)
                              }
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                ))}

              <IconButton
                size="small"
                style={{ marginTop: 10 }}
                onClick={() => handleAddGroup('done')}
              >
                <AddIcon fontSize="small" color="primary" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
