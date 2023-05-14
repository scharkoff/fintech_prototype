import React from 'react';
import styles from './OsterwalderModel.module.scss';
import { Container, Typography } from '@mui/material';

export function OsterwalderModel() {
  return (
    <Container maxWidth="lg">
      <div className={styles.osterwalderModelWrapper}>
        <Typography variant="h5" color="gray" marginBottom={5}>
          Модель Остервальдера
        </Typography>

        <div className={styles.tableWrapper}>
          <table className={styles.tableStyles} border="1px solid black">
            <tbody>
              <tr className={styles.firstRow}>
                <td>
                  <p className={styles.columnTitle}>Потребительские сегменты</p>
                  <p className={styles.columnDescr}>Кто у нас покупает?</p>
                  <div className={styles.textareaContainer}>
                    <textarea cols="30" rows="10"></textarea>
                  </div>
                </td>

                <td>
                  <div className={styles.dobuleColumn}>
                    <p className={styles.columnTitle}>Ценностные предложения</p>
                    <p className={styles.columnDescr}>
                      Какую проблему потребителя мы решаем нашим продуктом?
                    </p>
                    <div className={styles.textareaContainer}>
                      <textarea cols="30" rows="10"></textarea>
                    </div>

                    <p className={styles.columnTitle}>Каналы коммуникации</p>
                    <p className={styles.columnDescr}>
                      Какие каналы взаимодействия с клиентами у нас есть?
                    </p>
                    <div className={styles.textareaContainer}>
                      <textarea cols="30" rows="10"></textarea>
                    </div>
                  </div>
                </td>

                <td>
                  <p className={styles.columnTitle}>Отношения с клиентами</p>
                  <p className={styles.columnDescr}>
                    Какой клиентский сервис, какое отношение ждем типичный
                    представитель целевой аудитории проекта?
                  </p>
                  <div className={styles.textareaContainer}>
                    <textarea cols="30" rows="10"></textarea>
                  </div>
                </td>

                <td>
                  <div className={styles.dobuleColumn}>
                    <p className={styles.columnTitle}>Потоки доходов</p>
                    <p className={styles.columnDescr}>
                      Как мы зарабатываем деньги и как еще их можно заработать с
                      тем же продуктом и ресурсами?
                    </p>
                    <div className={styles.textareaContainer}>
                      <textarea cols="30" rows="10"></textarea>
                    </div>

                    <p className={styles.columnTitle}>
                      Ключевые виды деятельности
                    </p>
                    <p className={styles.columnDescr}>
                      Что нужно сделать, чтобы получить ценностное предложение?
                    </p>
                    <div className={styles.textareaContainer}>
                      <textarea cols="30" rows="10"></textarea>
                    </div>
                  </div>
                </td>

                <td>
                  <p className={styles.columnTitle}>Главные ресурсы</p>
                  <p className={styles.columnDescr}>
                    Какие ресурсы нужны, чтобы создать и реализоввать ценностные
                    предложения?
                  </p>
                  <div className={styles.textareaContainer}>
                    <textarea cols="30" rows="10"></textarea>
                  </div>
                </td>
              </tr>

              <tr className={styles.secondRow}>
                <td colSpan={2}>
                  <p className={styles.columnTitle}>Ключевые партнеры</p>
                  <p className={styles.columnDescr}>
                    Без каких контрагентов наш бизнес будет невозможен?
                  </p>
                  <div className={styles.textareaContainer}>
                    <textarea cols="30" rows="10"></textarea>
                  </div>
                </td>

                <td colSpan={3}>
                  <p className={styles.columnTitle}>Структура издержек</p>
                  <p className={styles.columnDescr}>
                    Из каких затрат складывается создание и реализация продукта?
                  </p>
                  <div className={styles.textareaContainer}>
                    <textarea cols="30" rows="10"></textarea>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}
